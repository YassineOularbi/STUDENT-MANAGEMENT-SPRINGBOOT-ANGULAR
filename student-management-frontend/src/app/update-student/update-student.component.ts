import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit{
  student: Object;
  studentId: any;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router){}
  UpdateStudent(studentForm){
    this.studentService.updateStudent(studentForm.value).subscribe(()=>{
      this.router.navigateByUrl("");
    })
  }
  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');
    console.log(this.studentId)
    this.studentService.getStudent(this.studentId).subscribe((data)=>{
      this.student = data;
      console.log(this.student)
    })
  }
}
