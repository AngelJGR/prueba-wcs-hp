import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';

import { MatSelect } from '@angular/material/select';

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

  getHouse() {
    this._hpService.getHouse(this.house).subscribe(res => {
      console.log(res)
    })
  }

}
