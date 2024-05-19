package com.springboot.studentmanagementbackend.controller;

import com.springboot.studentmanagementbackend.model.Student;
import com.springboot.studentmanagementbackend.service.StudentServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {

    @Autowired
    private StudentServiceImpl studentService;

    @Operation(summary = "Get all students")
    @GetMapping("/students")
    public List<Student> GetStudents() {
        return studentService.getStudents();
    }
    @Operation(summary = "Add student to database")
    @PostMapping("/student")
    public void SaveStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }
    @Operation(summary = "Update student from database")
    @PutMapping("/student")
    public void UpdateStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }
    @Operation(summary = "Delete student by id")
    @DeleteMapping("/student/{id}")
    public void DeleteStudent(@PathVariable Long id){
        studentService.deleteStudent(id);
    }
    @Operation(summary = "Find student by id")
    @GetMapping("/student/{id}")
    public Optional<Student> GetStudent(@PathVariable Long id){
        return studentService.getStudent(id);
    }

    @Operation(summary = "get students by name contains")
    @GetMapping("/students/{name}")
    public List<Student> getStudentsByName(@PathVariable String name){
        return studentService.getStudentsByName(name);
    }

    @Operation(summary = "get students order by name asc")
    @GetMapping("/students-order-asc")
    public List<Student> getStudentsOrderAsc(){
        return studentService.getStudentsOrderByAsc();
    }
    @Operation(summary = "get students order by name desc")
    @GetMapping("/students-order-desc")
    public List<Student> getStudentsOrderDesc(){
        return studentService.getStudentsOrderByDesc();
    }
}
