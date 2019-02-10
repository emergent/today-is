import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  constructor() { }

  getToday() {
    const date = new Date();
    const year = date.getFullYear(); 
    return { heisei: year - 1989 + 1,
             showa:  year - 1926 + 1,
             taisho: year - 1912 + 1,
             meiji:  year - 1868 + 1 };
  }
}
