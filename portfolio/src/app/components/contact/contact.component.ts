import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{
  contactList: contact[] = [];
  contactForm:any
  constructor(private _http: HttpClient,private contactservice: ContactService) {}
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });

  }
  onSubmit() {
    const body=this.contactForm.value;
    this.contactservice.sendEmail(body).subscribe((res) =>console.log(res));
  }






}
