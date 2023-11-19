import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHomeServiceService {
  private apiUrl = 'https://nhacuatui-api.azurewebsites.net/api/my-home';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
