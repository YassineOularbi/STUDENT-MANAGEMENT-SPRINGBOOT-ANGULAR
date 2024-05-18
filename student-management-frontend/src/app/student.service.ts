import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_STUDENTS = "/students"

  constructor(private httpClient: HttpClient) { }
  getStudents(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_STUDENTS)
  }
}
