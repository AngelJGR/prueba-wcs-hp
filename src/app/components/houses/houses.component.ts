import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';

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

  getHouse() {
    this._hpService.getHouse(this.house).subscribe(res => {
      console.log(res)
    })
  }

}
