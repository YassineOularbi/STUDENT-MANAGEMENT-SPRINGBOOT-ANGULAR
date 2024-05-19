import { Component, SimpleChanges } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../student.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  search: any;

  constructor(private studentService:StudentService, private route: ActivatedRoute){}


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
    this.route.paramMap.subscribe(params => {
      this.search = params.get('name');
      this.searchStudentsByName(this.search);
    });
  }
  
}
