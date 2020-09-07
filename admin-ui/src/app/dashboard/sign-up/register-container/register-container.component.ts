import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromApp from '../../../state/app.reducer';
import * as AppActions from '../../../state/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnInit {

  username = ``;

  password = ``;

  email = ``;

  accountName = ``;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
  }

  register() : void {

    this.store.dispatch(AppActions.signUp({param: { username: this.username, email: this.email, pword: this.password, accountName: this.accountName}}));

  }

}
