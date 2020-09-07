import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-subscription-information-card',
  templateUrl: './subscription-information-card.component.html',
  styleUrls: ['./subscription-information-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionInformationCardComponent implements OnInit {

  value = false;

  label = `Basic plan`;

  constructor() { }

  ngOnInit(): void {
  }

}
