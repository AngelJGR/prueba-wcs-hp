import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(
    private _hpService: HpService
  ) { }

  ngOnInit(): void {
    this.getStaff()
  }

  staff$
  displayedColumns$:string[] = ['name', 'patronus', 'age', 'image'];
  isLoadingResults:boolean = false

  getStaff () {
    this.staff$ = new MatTableDataSource<Person>()
    this.isLoadingResults = true
    this._hpService.getStaff()
      .subscribe(res => {
        this.staff$.data = res
        this.isLoadingResults = false
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

}
