import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl: string = "http://localhost:8080/person";
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  )
  {
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'
      }
    );
  }

  getPeople() {
    return this.http
                .get(this.baseUrl + "/all",
                    {headers: this.headers});
  }

}
