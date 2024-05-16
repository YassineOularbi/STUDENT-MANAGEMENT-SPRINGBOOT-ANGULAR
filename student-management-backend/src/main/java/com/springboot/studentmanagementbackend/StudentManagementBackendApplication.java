package com.springboot.studentmanagementbackend;

import com.springboot.studentmanagementbackend.model.Student;
import com.springboot.studentmanagementbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentManagementBackendApplication implements CommandLineRunner {
	@Autowired
	private StudentRepository studentRepository;
	public static void main(String[] args) {
		SpringApplication.run(StudentManagementBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		studentRepository.save(new Student(1L, "Alice", "alice@example.com", "123-456-7890", "alice_profile.jpg", 1234, true));
		studentRepository.save(new Student(2L, "Bob", "bob@example.com", "987-654-3210", "bob_profile.jpg", 5678, false));
		studentRepository.save(new Student(3L, "Charlie", "charlie@example.com", "111-222-3333", "charlie_profile.jpg", 9999, true));
		studentRepository.save(new Student(4L, "David", "david@example.com", "555-555-5555", "david_profile.jpg", 4321, false));
		studentRepository.save(new Student(5L, "Eva", "eva@example.com", "777-888-9999", "eva_profile.jpg", 6789, true));
		studentRepository.save(new Student(6L, "Fiona", "fiona@example.com", "333-333-3333", "fiona_profile.jpg", 1357, true));
		studentRepository.save(new Student(7L, "Gavin", "gavin@example.com", "999-999-9999", "gavin_profile.jpg", 2468, false));
		studentRepository.save(new Student(8L, "Hannah", "hannah@example.com", "444-444-4444", "hannah_profile.jpg", 9876, true));
		studentRepository.save(new Student(9L, "Ian", "ian@example.com", "666-666-6666", "ian_profile.jpg", 3141, false));
		studentRepository.save(new Student(10L, "Jasmine", "jasmine@example.com", "222-222-2222", "jasmine_profile.jpg", 8008, true));
	}
}
