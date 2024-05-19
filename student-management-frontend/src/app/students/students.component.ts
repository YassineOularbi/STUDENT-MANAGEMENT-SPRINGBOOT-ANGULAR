import { Component } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortAlphaAsc, faSortAlphaDesc } from '@fortawesome/free-solid-svg-icons';

import { StudentService } from '../student.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  providers: [ StudentService ]
})
export class StudentsComponent implements OnInit{
  faSlidersH = faSlidersH;
  faSort = faSort;
  faSortAlphaAsc = faSortAlphaAsc;
  faSortAlphaDesc = faSortAlphaDesc;
  students: Object;
  searchText:any;
  search: any;

  constructor(private studentService:StudentService, private route: ActivatedRoute, private router: Router){}


  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  
  getAllStudents(){
    this.studentService.getStudents().subscribe((datas) => {
      this.students = datas;
    })
  }

  getStudentAsc(){
    this.studentService.getStudentsOrderAsc().subscribe((datas)=>{
      this.students = datas;
    })
  }
  getStudentDesc(){
    this.studentService.getStudentsOrderDesc().subscribe((datas)=>{
      this.students = datas;
    })
  }

  searchStudentsByName(name){
    if(name){
    this.studentService.getStudentsByNameContains(name).subscribe((datas)=>{
      this.students = datas;
    })
  } else {
    this.getAllStudents();
  }
  }
  

  ngOnInit(): void {
    if(this.router.url === "/students/desc"){
      this.getStudentDesc();
    } else if(this.router.url === "/students/asc"){
      this.getStudentAsc();
    } else {
      this.route.paramMap.subscribe(params => {
        this.search = params.get('name');
        this.searchStudentsByName(this.search);
      });
    }
  }
  
}
