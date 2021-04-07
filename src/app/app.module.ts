import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './components/houses/houses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgePipe } from './pipes/age.pipe';
import { StudentsComponent } from './components/students/students.component';
import { StaffComponent } from './components/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    AgePipe,
    StudentsComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
