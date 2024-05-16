package com.springboot.studentmanagementbackend.controller;

import com.springboot.studentmanagementbackend.model.Student;
import com.springboot.studentmanagementbackend.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    @Autowired
    private StudentServiceImpl studentService;

    @GetMapping("/students")
    public List<Student> GetStudents() {
        return studentService.getStudents();
    }
    @PostMapping("/student")
    public void SaveStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }

    @PutMapping("/student")
    public void UpdateStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }

    @DeleteMapping("/student/{id}")
    public void DeleteStudent(@PathVariable Long id){
        studentService.deleteStudent(id);
    }

    @GetMapping("/student/{id}")
    public Optional<Student> GetStudent(@PathVariable Long id){
        return studentService.getStudent(id);
    }
}
