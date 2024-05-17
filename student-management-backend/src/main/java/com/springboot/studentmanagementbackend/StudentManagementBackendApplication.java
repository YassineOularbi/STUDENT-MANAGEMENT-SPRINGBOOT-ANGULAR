package com.springboot.studentmanagementbackend;

import com.springboot.studentmanagementbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class StudentManagementBackendApplication {
	@Autowired
	private StudentRepository studentRepository;
	public static void main(String[] args) {
		SpringApplication.run(StudentManagementBackendApplication.class, args);
	}
}
