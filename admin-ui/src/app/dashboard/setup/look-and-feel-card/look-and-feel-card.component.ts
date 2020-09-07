import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-look-and-feel-card',
  templateUrl: './look-and-feel-card.component.html',
  styleUrls: ['./look-and-feel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookAndFeelCardComponent implements OnInit {

  value = ``;

  value1 = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
