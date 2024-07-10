import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  API_URL: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private HttpClient: HttpClient) { }

  getProducts(): Observable<any>{
    return this.HttpClient.get(this.API_URL).pipe(res=> res);
  }
}
