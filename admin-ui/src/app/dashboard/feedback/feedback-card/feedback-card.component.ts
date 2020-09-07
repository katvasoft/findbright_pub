import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackCardComponent implements OnInit {

  value = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
