import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-synonym-edit-text',
  templateUrl: './synonym-edit-text.component.html',
  styleUrls: ['./synonym-edit-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymEditTextComponent implements OnInit {

  value = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
