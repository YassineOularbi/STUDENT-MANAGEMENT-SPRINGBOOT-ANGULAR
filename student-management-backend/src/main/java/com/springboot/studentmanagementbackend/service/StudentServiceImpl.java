package com.springboot.studentmanagementbackend.service;

import com.springboot.studentmanagementbackend.model.Student;
import com.springboot.studentmanagementbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    @Transactional
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    @Transactional
    public void saveStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    @Transactional
    public Optional<Student> getStudent(Long id){
        return studentRepository.findById(id);
    }

    @Override
    @Transactional
    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }

    @Override
    public List<Student> getStudentsByName(String name) {
        return studentRepository.findStudentByStudentNameContains(name);
    }
}