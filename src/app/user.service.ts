import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service: HttpClient) { }

  getUsers(): Observable<any>{
    return this.service.get('https://jsonplaceholder.typicode.com/users');
  }
}
