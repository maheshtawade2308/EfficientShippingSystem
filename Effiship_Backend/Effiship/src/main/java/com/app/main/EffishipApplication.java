package com.app.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EffishipApplication {

	public static void main(String[] args) {
		SpringApplication.run(EffishipApplication.class, args);
		System.out.println("Server Started Successfully");
	}

}
