import { Injectable } from '@angular/core';
import { Today } from './today';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  constructor() { }

  getToday(): Today {
    const date = new Date();
    const today: Today = {
              year:  date.getFullYear(),
              month: date.getMonth() + 1,
              day:   date.getDate() };
    return today;
  }
}
