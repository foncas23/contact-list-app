//ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MODULE
import { AppRoutingModule } from './app-routing.module';
//COMPONENTS
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ListContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
