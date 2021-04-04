package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

import java.util.List;
@RestController
public class Studentcontroller {
	@Autowired
	public StudentRepository studentrepository;
	@Autowired
	private SequenceGenerator service;
	
	// get method
	@GetMapping(value= "/all")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Student> getAllStudents()
	{
		return studentrepository.findAll();
		
	}
	
	// post method
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(value= "/create")
	public String createStudent(@RequestBody Student student)
	{
		// generating roll sequence
		int s = service.getSeq(student.SEQUENCE_NAME);
	    String rollno = "R-00" + s;
	    student.setRollId(rollno);
	    Student _student = studentrepository.insert(student);
		return "Student Created" + _student.getName();
	}
	

}
