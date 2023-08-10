package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheck {

	@GetMapping("/")
	public String healthCheck() {
		return "The service is up and running... 제발좀..";
	}

}
