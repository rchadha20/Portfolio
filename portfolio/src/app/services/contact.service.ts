import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private url: string = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) { }

  sendEmail(contact:any){
    return this.http.post(this.url,contact);

  }


}
