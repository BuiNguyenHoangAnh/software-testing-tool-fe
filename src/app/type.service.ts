import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from 'src/model/bug-type.model';

const apiUrl = 'http://127.0.0.1:5000/bug-type-prediction';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient:HttpClient) { }

  predictType(paramValue: String):Observable<Type>{
    let body = {search_term: paramValue}
    return this.httpClient.post<Type>(apiUrl, body).pipe()
  }
}

