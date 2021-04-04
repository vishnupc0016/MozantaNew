package com.example.demo.model;

import java.util.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.*;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection ="student")
public class Student {
	
	
	public static final String SEQUENCE_NAME ="Roll_Id";
	//front back end validation
	
	@Id
	private String Id;
	private String rollId;
    @NotNull
    @Size(min =4,message="Name should have atleast 4 characters")
	private String Name;
    @NotNull
	private Date DateOfBirth;
    @NotNull
	private String Division;
    @NotNull
	private String Standard;
    @NotNull
	private String Gender;
     
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(String name, Date dateOfBirth, String division, String standard, String gender) {
		super();
		this.Name = name;
		this.DateOfBirth = dateOfBirth;
		this.Division = division;
		this.Standard = standard;
		this.Gender = gender;
	}
// getters and setters
	public String getId() {
		return Id;
	}

	public void setId(String id) {
		this.Id = id;
	}

	public String getRollId() {
		return rollId;
	}

	public void setRollId(String rollId) {
		this.rollId = rollId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}

	public Date getDateOfBirth() {
		return DateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.DateOfBirth = dateOfBirth;
	}

	public String getDivision() {
		return Division;
	}

	public void setDivision(String division) {
		this.Division = division;
	}

	public String getStandard() {
		return Standard;
	}

	public void setStandard(String standard) {
		this.Standard = standard;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		this.Gender = gender;
	}
	
	
	
}
