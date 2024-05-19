import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  student: Object;
  studentId: any;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.studentId).subscribe((data)=>{
      this.student = data;
    })
  }
}
