package com.example.survey.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.survey.model.SurveyForm;
@Repository
public interface SurveyFormRepository extends MongoRepository<SurveyForm, String> {
  
	
	public List<SurveyForm> findAll();
	public SurveyForm findByEmpId(long id);
	public SurveyForm findByName(String name);
	public SurveyForm findByBusinessEmail(String email);
	public SurveyForm findByBaseLocation(String baseLocation);
	}
