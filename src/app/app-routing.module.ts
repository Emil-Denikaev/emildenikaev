import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MainComponent } from './components/main/main.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
