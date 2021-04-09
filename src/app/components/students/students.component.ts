import { Component, OnInit, ViewChild } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import { RequestStudentsComponent } from './request-students/request-students.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
  displayedColumns$:string[] = ['index', 'name', 'patronus', 'age', 'image'];
  isLoadingResults:boolean = false
  isSuccessLoad:boolean = false

  getStudents (): void {
    this.students$ = new MatTableDataSource<Person>()
    this.isLoadingResults = true
    this.isSuccessLoad = false
    this._hpService.getStudents()
      .subscribe(res => {
        this.students$.data = res
        this.isLoadingResults = false
        this.isSuccessLoad = true
        this.students$.paginator = this.paginator;
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

  addStudentDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this._snackBar.open('Solicitud Registrada', 'X', {
          duration: 4000
        })
      }
    });
  }

  showRequests(): void {
    this.dialog.open(RequestStudentsComponent, {
      width: '750px'
    });
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.students$.filter = filterValue;
  }

}
