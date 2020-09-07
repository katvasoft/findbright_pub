import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromApp from '../../../state/app.reducer';
import * as AppActions from '../../../state/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent implements OnInit {

  username = ``;

  password = ``;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
  }

  login() : void {

    
    this.store.dispatch(AppActions.login({param :{username: this.username,pword: this.password}}))

  }

}
