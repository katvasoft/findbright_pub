import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ctr-quick-stats',
  templateUrl: './ctr-quick-stats.component.html',
  styleUrls: ['./ctr-quick-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtrQuickStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
