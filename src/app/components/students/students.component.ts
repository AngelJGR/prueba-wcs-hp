import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    private _hpService: HpService
  ) { }

  ngOnInit(): void {
    this.getStudents()
  }

  students$
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

}
