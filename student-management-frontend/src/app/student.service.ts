import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly API_URL = "http://localhost:8080"
  readonly ENDOPOINT_STUDENTS = "/students"
  readonly ENDOPOINT_STUDENT = "/student"

  constructor(private httpClient: HttpClient) { }
  getStudents(){
    return this.httpClient.get(this.API_URL + this.ENDOPOINT_STUDENTS);
  }
  addStudent(student){
    return this.httpClient.post(this.API_URL+this.ENDOPOINT_STUDENT, student);
  }
  deleteStudent(id: number){
    return this.httpClient.delete(this.API_URL+this.ENDOPOINT_STUDENT+"/"+id);
  }
  getStudent(id: number){
    return this.httpClient.get(this.API_URL+this.ENDOPOINT_STUDENT+"/"+id)
  }
  updateStudent(student){
    return this.httpClient.put(this.API_URL+this.ENDOPOINT_STUDENT, student);
  }
}
