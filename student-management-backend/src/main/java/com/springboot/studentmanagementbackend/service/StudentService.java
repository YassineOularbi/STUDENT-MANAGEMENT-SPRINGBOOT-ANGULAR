package com.springboot.studentmanagementbackend.service;

import com.springboot.studentmanagementbackend.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    List<Student> getStudents();

    void saveStudent(Student student);

    Optional<Student> getStudent(Long id);

    void deleteStudent(Long id);

    List<Student> getStudentsByName(String name);

    List<Student> getStudentsOrderByAsc();

    List<Student> getStudentsOrderByDesc();

}