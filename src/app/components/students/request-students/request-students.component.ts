import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-request-students',
  templateUrl: './request-students.component.html',
  styleUrls: ['./request-students.component.css']
})
export class RequestStudentsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  students$
  displayedColumns$:string[] = ['index', 'name', 'patronus', 'age', 'image'];

  constructor(
    public dialogRef: MatDialogRef<RequestStudentsComponent>,
  ) {
    this.students$ = new MatTableDataSource<Person>()
    this.students$.data = JSON.parse(localStorage.getItem('students'))
    this.students$.paginator = this.paginator
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.students$.filter = filterValue;
  }

}
