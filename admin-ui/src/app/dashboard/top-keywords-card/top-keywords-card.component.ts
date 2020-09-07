import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-keywords-card',
  templateUrl: './top-keywords-card.component.html',
  styleUrls: ['./top-keywords-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopKeywordsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
