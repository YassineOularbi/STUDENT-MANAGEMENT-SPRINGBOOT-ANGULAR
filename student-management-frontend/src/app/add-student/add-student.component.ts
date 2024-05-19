import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent{

  constructor(private studentService: StudentService, private router: Router){}

  AddStudent(studentForm){
    this.studentService.addStudent(studentForm.value).subscribe(()=>{
      this.router.navigateByUrl("");
    })
  }

}
