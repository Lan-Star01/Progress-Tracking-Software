import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class MomentumApiService {

  private token ='9e763dbf-1c90-4482-a019-eeacc57e203c'
  private apiUrl = 'https://momentum.redberryinternship.ge/api';
  private hashedToken!: string;
  
  constructor(private http: HttpClient) {
    this.hashedToken = this.hashToken();
  }

  private hashToken(): string {
    return CryptoJS.SHA256(this.token).toString(CryptoJS.enc.Hex);
  }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  getPriorities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/priorities`);
  }

  getDepartments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/departments`);
  }

  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`, { headers: this.headers });
  }

  getStatuses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/statuses`);
  }

}

// interfaces
export interface Priorities {
  id: number;
  name: string;
  icon: string;
}

export interface Departments {
  id: number;
  name: string;
}

export interface Employees {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department_id: string;
}

export interface Statuses {
  id: number;
  name: string;
}