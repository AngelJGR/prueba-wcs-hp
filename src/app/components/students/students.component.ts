import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    private _hpService: HpService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStudents()
  }

  students$
  // student:Person
  displayedColumns$:string[] = ['name', 'patronus', 'age', 'image'];
  isLoadingResults:boolean = false

  getStudents () {
    this.students$ = new MatTableDataSource<Person>()
    this.isLoadingResults = true
    this._hpService.getStudents()
      .subscribe(res => {
        this.students$.data = res
        this.isLoadingResults = false
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.success) {
        this._snackBar.open('Solicitud Registrada', 'X', {
          duration: 4000
        })
      }
    });
  }

}
