import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-clicks-quick-stats',
  templateUrl: './clicks-quick-stats.component.html',
  styleUrls: ['./clicks-quick-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClicksQuickStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
