package com.example.demo.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import com.example.demo.model.DbSequence;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import java.util.Objects;


@Service
public class SequenceGenerator {
 
	@Autowired
	private MongoOperations mongoOperations;
	
	
	public int getSeq(String sequenceName) {
		Query query = new Query(Criteria.where("id").is(sequenceName));
		 Update update = new Update().inc("seq", 1);
	        //modify in document
	        DbSequence counter = mongoOperations
	                .findAndModify(query,
	                        update, options().returnNew(true).upsert(true),
	                        DbSequence.class);

	        return !Objects.isNull(counter) ? counter.getSeq() : 1;
		
				
	}
}
