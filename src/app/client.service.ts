import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from 'src/app/models/customer'; 
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = 'http://localhost:3000/clientlist'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customers[]>(this.url)
  }
  getBySearch(str: string) {
    return this.http.get<Customers[]>(`${this.url}?q=${str}`)
  }
  getByStatus(status: string) {
    return this.http.get<Customers[]>(`${this.url}?status=${status}`)
  }
}
