import { Component, OnInit, ViewChild } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';
import { Person } from 'src/app/interfaces/person';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private _hpService: HpService
  ) { }

  ngOnInit(): void {
  }

  house:string = ''
  houses:Array<string> = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff']
  displayedColumns$:string[] = ['index', 'name', 'patronus', 'age', 'image'];
  housesCharacters$
  isLoadingResults:boolean = false

  getHouse() {
    this.housesCharacters$ = new MatTableDataSource<Person>()
    this.isLoadingResults = true
    this._hpService.getHouse(this.house)
      .subscribe(res => {
        this.housesCharacters$.data = res
        this.isLoadingResults = false
        this.housesCharacters$.paginator = this.paginator;
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.housesCharacters$.filter = filterValue;
  }

}
