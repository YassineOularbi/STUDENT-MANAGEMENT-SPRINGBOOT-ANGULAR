import { Component } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../student.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  providers: [ StudentService ]
})
export class StudentsComponent implements OnInit{
  faSlidersH = faSlidersH;
  students: Object;
  searchText:any;

  constructor(private studentService:StudentService){}


  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((datas) => {
      this.students = datas;
    })
  }
}
