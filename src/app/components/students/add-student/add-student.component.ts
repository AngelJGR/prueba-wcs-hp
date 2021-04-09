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
    this.dialogRef.close({success: false});
  }

  save():void {
    if (localStorage.getItem('students') === null) {
      localStorage.setItem('students', JSON.stringify([]))
    }
    let studentsSaved:Array<Person> = JSON.parse(localStorage.getItem('students'))
    let dateUnformat: Date = (this.student.dateOfBirth as unknown as Date)
    let dateFormated: string = `${String(dateUnformat.getDate()).padStart(2, '0')}-${String(dateUnformat.getMonth() + 1).padStart(2, '0')}-${dateUnformat.getFullYear()}`
    this.student.dateOfBirth = dateFormated
    studentsSaved.push(this.student)
    localStorage.setItem('students', JSON.stringify(studentsSaved))
    this.dialogRef.close({success: true});
  }

}
