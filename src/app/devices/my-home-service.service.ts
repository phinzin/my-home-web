import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHomeServiceService {
  // private apiUrl = 'http://my-management-api-ix-chart.ix-my-management-api.svc.cluster.local:9081/api/my-home';
  private apiUrl = 'http://notes-api.phitruong.io.vn//api/my-home'
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
