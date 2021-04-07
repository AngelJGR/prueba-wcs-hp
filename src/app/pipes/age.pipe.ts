import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    let birthday_arr:Array<string> = value.split("-")
    let birthDay: string = moment(new Date(parseInt(birthday_arr[2]), parseInt(birthday_arr[1]) - 1, parseInt(birthday_arr[0]))).format()
    let age:number = moment(Date.now()).diff(birthDay, 'years')
    return age;
  }

}
