import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'house', component: HousesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
