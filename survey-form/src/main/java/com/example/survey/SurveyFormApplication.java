package com.example.survey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "benchData"))
public class SurveyFormApplication {

	public static void main(String[] args) {
		SpringApplication.run(SurveyFormApplication.class, args);
	}

}
