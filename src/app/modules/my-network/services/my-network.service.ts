import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyNetworkService {

  constructor(private http: HttpClient) { }

  getInvitations(): Observable<any> {
    return this.http.get(`${environment.API}invitation`)
  }


}
