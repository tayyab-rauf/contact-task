import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  contacts: any[] = [];
  contactId: number;
  contactDetails: any = {};

  constructor(private contactService: ContactsService) {
    this.contactId = 0;
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts: any[]) => {
      this.contacts = contacts;
      console.log("🚀 ~ AppComponent ~ this.contactService.getContacts ~ this.contacts:", this.contacts)
    });

  }

  test(id: number): void {
    this.contactService.getContactDetails(id).subscribe(details => {
      this.contactDetails = details;
      console.log("🚀 ~ AppComponent ~ this.contactService.getContactDetails ~ this.contactDetails:", this.contactDetails)
    });
  }

  selectContact(contact: any) {
    console.log("🚀 ~ AppComponent ~ selectContact ~ contact:", contact)
    this.contactId = contact.id;
    this.test(this.contactId);
  }
}


