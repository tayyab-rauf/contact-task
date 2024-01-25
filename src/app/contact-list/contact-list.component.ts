import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  contactId: number = 15
  contactDetails: any = {};

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
  //   this.contactService.getContacts().subscribe((contacts: any[]) => {
  //     this.contacts = contacts;
  //     console.log("🚀 ~ AppComponent ~ this.contactService.getContacts ~ this.contacts:", this.contacts)
  //   });
  //   this.test(this.contactId);
  }

  // test(id: number): void {
  //   this.contactService.getContactDetails(id).subscribe(details => {
  //     this.contactDetails = details;
  //     console.log("🚀 ~ AppComponent ~ this.contactService.getContactDetails ~ this.contactDetails:", this.contactDetails)
  //   });
  // }
}


