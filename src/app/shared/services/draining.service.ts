import { environment } from './../../../environments/environment';
import { Draining } from './../models/draining';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrainingRequest } from '../models/drainingRequest';

@Injectable({
  providedIn: 'root'
})
export class DrainingService {
  static URL = environment.url + '/';

  constructor(private http: HttpClient) {}

  getDrainingForCurrentUser(id: number): Observable<Draining[]> {
    return this.http.get<Draining[]>(DrainingService.URL + 'draining/user/' + id);
  }

  getNextDrainingByUserId(id: number): Observable<Draining> {
    return this.http.get<Draining>(DrainingService.URL + 'draining/user/' + id + '/next');
  }

  updateDrainingUser(id: number): Observable<Draining> {
    return this.http.put<Draining>(DrainingService.URL + 'draining/status', {id});
  }

  getDrainingAccepted(userId: number): Observable<any[]> {
    return this.http.get<any[]>(DrainingService.URL + 'draining/accepted/' + userId);
  }
  saveDrainingDone(draining: Draining): Observable<Draining> {
    const id = draining.id;
    console.log(draining);

    return this.http.put<Draining>(DrainingService.URL + 'draining/' + id, draining);
 }
}
