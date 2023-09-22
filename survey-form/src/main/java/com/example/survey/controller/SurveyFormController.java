package com.example.survey.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.survey.model.SurveyForm;
import com.example.survey.service.SurveyFormService;
import com.example.survey.service.SequenceGeneratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SurveyFormController {
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	SurveyFormService surveyFormService;
	@GetMapping("/getAll")
	public List<SurveyForm> getAll(){
		return surveyFormService.getAll();
				}
	@PostMapping("/addSurveyData")
	public SurveyForm addBenchDataForm(@RequestBody SurveyForm surveyForm) {
		surveyForm.setEmpId(sequenceGeneratorService.generateSequence(SurveyForm.SEQUENCE_NAME));
		return surveyFormService.addSurveyDataForm(surveyForm);
	}
	@PutMapping("/updateBenchDataForm")
	public SurveyForm updateBenchDataForm(@RequestBody SurveyForm surveyForm) {
		return surveyFormService.updateSurveyDataForm(surveyForm);
	}

}
