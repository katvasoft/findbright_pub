import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sign-up-form1',
  templateUrl: './sign-up-form1.component.html',
  styleUrls: ['./sign-up-form1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm1Component implements OnInit {

  value = ``;

  value1 = ``;

  value2 = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
