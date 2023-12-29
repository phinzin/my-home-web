import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = 'https://notes-api.phitruong.io.vn/api/transaction'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }
  addTransaction(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateTransaction(id: string, data: any): Observable<any> {
    data["id"] = id;
    return this.http.put(`${this.apiUrl}`, data);
  }

  deleteTransaction(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

}
