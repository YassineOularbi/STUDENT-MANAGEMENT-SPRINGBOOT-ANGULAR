package com.springboot.studentmanagementbackend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long studentIDNumber;
    @Column(name = "student_name")
    private String studentName;
    @Column(name = "student_email")
    private String studentEmail;
    @Column(name = "student_phone")
    private String studentPhoneNumber;
    @Column(name = "student_picture")
    private String studentProfilePicture;
    @Column(name = "student_pc")
    private Integer studentPCNumber;
    @Column(name = "student_bike")
    private Boolean studentHasBike;

}