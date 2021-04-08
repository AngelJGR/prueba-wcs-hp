import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  // student:Person

  student:Person = {
    name: '',
    patronus: '',
    dateOfBirth: '',
    image: ''
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ])
  dateFormControl = new FormControl('', [
    Validators.required
  ])
  imageFormControl = new FormControl('', [
    Validators.required
  ])
  patronusFormControl = new FormControl('', [
    Validators.required
  ])

  constructor(
    public dialogRef: MatDialogRef<AddStudentComponent>,
  ) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  save():void {
    if (localStorage.getItem('students') === null) {
      localStorage.setItem('students', JSON.stringify([]))
    }
    let studentsSaved:Array<Person> = JSON.parse(localStorage.getItem('students'))
    studentsSaved.push(this.student)
    localStorage.setItem('students', JSON.stringify(studentsSaved))
    this.dialogRef.close();
  }

}
