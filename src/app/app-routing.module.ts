import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'house', component: HousesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
