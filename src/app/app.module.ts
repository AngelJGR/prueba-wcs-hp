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
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RequestStudentsComponent } from './components/students/request-students/request-students.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    AgePipe,
    StudentsComponent,
    StaffComponent,
    AddStudentComponent,
    RequestStudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
