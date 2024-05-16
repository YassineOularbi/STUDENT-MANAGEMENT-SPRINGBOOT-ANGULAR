package com.springboot.studentmanagementbackend.repository;

import com.springboot.studentmanagementbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
