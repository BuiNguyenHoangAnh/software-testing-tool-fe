import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Severity } from 'src/model/bug-severity.model';

const apiUrl = 'http://127.0.0.1:5000/bug-severity-prediction';

@Injectable({
  providedIn: 'root'
})
export class SeverityService {

  constructor(private httpClient:HttpClient) { }

  predictSeverity(paramValue: String):Observable<Severity>{
    let body = {search_term: paramValue}
    return this.httpClient.post<Severity>(apiUrl, body).pipe()
  }
}
