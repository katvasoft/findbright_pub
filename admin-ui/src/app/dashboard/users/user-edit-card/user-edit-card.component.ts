import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-edit-card',
  templateUrl: './user-edit-card.component.html',
  styleUrls: ['./user-edit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditCardComponent implements OnInit {

  value = ``;

  value1 = ``;

  value2 = ``;

  value3 = ``;

  constructor(private store: Store<fromApp.State>) { }

  saveUser(event) {
    this.store.dispatch(AppActions.saveUser({ param: event }));
  }

  ngOnInit(): void {
  }

}
