import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-hits-keyword-card',
  templateUrl: './no-hits-keyword-card.component.html',
  styleUrls: ['./no-hits-keyword-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoHitsKeywordCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
