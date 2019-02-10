import { Component, OnInit } from '@angular/core';
import { Today } from '../today';
import { TodayService } from '../today.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  today: Today;

  constructor(private todayService: TodayService) { }

  ngOnInit() {
    this.getToday();
  }

  getToday() {
    this.today = this.todayService.getToday();
  }
}
