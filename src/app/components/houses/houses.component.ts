import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(
    private _hpService: HpService
  ) { }

  ngOnInit(): void {
  }

  house:string = ''
  houses:Array<string> = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff']
  displayedColumns$:string[] = ['name', 'patronus', 'age', 'image'];
  housesCharacters$
  isLoadingResults:boolean = false

  getHouse() {
    this.housesCharacters$ = new MatTableDataSource<any>()
    this.isLoadingResults = true
    this._hpService.getHouse(this.house)
      .subscribe(res => {
        this.housesCharacters$.data = res
        this.isLoadingResults = false
      }, error => {
        this.isLoadingResults = false
        console.log(error)
      })
  }

}
