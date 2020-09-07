import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store, select } from '@ngrx/store';
import * as appSelectors from '../../../state/app.selectors';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponentComponent implements OnInit {

  text = (item) => `${item.username}`;

  text1 = (item) => `${item.email}`;

  sequenceSpace62$ = this.store.pipe(select(appSelectors.getStateUsers))
    .pipe(
      map(stateUsers => stateUsers),
    );

  constructor(private store: Store<fromApp.State>) { }

  removeUser(event,item) {
    this.store.dispatch(AppActions.removeUser({ param: {
  id: item.id
} }));
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getUsers({ param: null }));
  }

}
