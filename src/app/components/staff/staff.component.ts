import { Component, OnInit, ViewChild } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private _hpService: HpService
  ) { }

  ngOnInit(): void {
    this.getStaff()
  }

  staff$
  displayedColumns$:string[] = ['index', 'name', 'patronus', 'age', 'image'];
  isLoadingResults:boolean = false
  isSuccessLoad:boolean = false

  getStaff (): void {
    this.staff$ = new MatTableDataSource<Person>()
    this.isLoadingResults = true
    this.isSuccessLoad = false
    this._hpService.getStaff()
      .subscribe(res => {
        this.staff$.data = res
        this.isLoadingResults = false
        this.isSuccessLoad = true
        this.staff$.paginator = this.paginator;
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

  applyFilter(filterValue: string):void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.staff$.filter = filterValue;
  }

}
