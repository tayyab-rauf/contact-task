import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = 'https://65b1ee6d9bfb12f6eafc659a.mockapi.io/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contacts`);
  }

  getContactDetails(contactId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contacts/${contactId}`);
  }
}