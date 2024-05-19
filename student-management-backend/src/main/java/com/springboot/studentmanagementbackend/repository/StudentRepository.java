package com.springboot.studentmanagementbackend.repository;

import com.springboot.studentmanagementbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findStudentByStudentNameContains(String name);
    List<Student> findAllByOrderByStudentNameAsc();
    List<Student> findAllByOrderByStudentNameDesc();
}
