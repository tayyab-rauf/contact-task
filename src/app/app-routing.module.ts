import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contact-list',
  },
  {
    path: 'contact-list',
    component: ContactListComponent,
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent,
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
