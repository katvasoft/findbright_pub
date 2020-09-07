import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-space',
  templateUrl: './main-space.component.html',
  styleUrls: ['./main-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSpaceComponent implements OnInit {

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getDomains({ param: null }));
  }

}
