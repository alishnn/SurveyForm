package com.example.survey.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.survey.model.SurveyForm;
import com.example.survey.repository.SurveyFormRepository;

@Service
public class SurveyFormService {
	
	
	@Autowired
	SurveyFormRepository surveyFormRepository;
	
	
	public List<SurveyForm> getAll(){
		
	
		return surveyFormRepository.findAll();
		}


   public SurveyForm getByEmpId(long id) {
	   return surveyFormRepository.findByEmpId(id);
   }
   public SurveyForm getByName(String name) {
	   return surveyFormRepository.findByName(name);
   }
   public SurveyForm getByBusinessEmail(String email) {
	   return surveyFormRepository.findByBusinessEmail(email);
   }
   public SurveyForm getByBaseLocation(String baseLocation) {
	   return surveyFormRepository.findByBaseLocation(baseLocation);
   }
	 public SurveyForm addSurveyDataForm(SurveyForm surveyForm) {
		 return surveyFormRepository.save(surveyForm);
	 }
	 public SurveyForm updateSurveyDataForm(SurveyForm surveyForm) {
		 SurveyForm surveyForm2 = surveyFormRepository.findByEmpId(surveyForm.getEmpId());
		 surveyForm2.setName(surveyForm.getName());
		 surveyForm2.setBusinessEmail(surveyForm.getBusinessEmail());
		 surveyForm2.setBaseLocation(surveyForm.getBaseLocation());
		 surveyForm2.setReportingToBase(surveyForm.getReportingToBase());
		 surveyForm2.setExplanation(surveyForm.getExplanation());
		 surveyForm2.setCertifications(surveyForm.getCertifications());
		 surveyForm2.setBenchStatus(surveyForm.getBenchStatus());
		 return surveyFormRepository.save(surveyForm2);
	 }
	 public String deleteSurveyDataForm(long id) {
		 SurveyForm surveyForm = surveyFormRepository.findByEmpId(id);
		 surveyFormRepository.delete(surveyForm);
		 return "deleted";
	 }
   }
