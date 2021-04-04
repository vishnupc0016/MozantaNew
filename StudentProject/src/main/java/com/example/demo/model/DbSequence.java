package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "db_sequence")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DbSequence {
	@Id
	private String id;
	
	public int  seq;

	public int getSeq() {
		// TODO Auto-generated method stub
		return 0;
	}

	
}
