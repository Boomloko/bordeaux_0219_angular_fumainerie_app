import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  static URL = 'http://localhost:3000/auth/signin';
  constructor(private http: HttpClient) { }

  authUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(SigninService.URL, [email, password]);
  }

  // code Homepage


  // constructor(private http: HttpClient) { }

  // connectUser(user: User): Observable<User> {
  //   return this.http.post<User>(SigninService.URL, user);

  // }

}
