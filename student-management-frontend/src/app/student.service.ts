import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly API_URL = "http://localhost:8080"
  readonly GET_STUDENTS = "/students"
  readonly DELETE_STUDENT = "/student"

  constructor(private httpClient: HttpClient) { }
  getStudents(){
    return this.httpClient.get(this.API_URL + this.GET_STUDENTS);
  }

  deleteStudent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}${this.DELETE_STUDENT}/${id}`);
  }
}
