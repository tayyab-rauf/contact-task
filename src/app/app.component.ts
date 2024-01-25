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
    });

  }

  getContactDetail(id: number): void {
    this.contactService.getContactDetails(id).subscribe(details => {
      this.contactDetails = details;
    });
  }

  selectContact(contact: any) {
    this.contactId = contact.id;
    this.getContactDetail(this.contactId);
  }
}


