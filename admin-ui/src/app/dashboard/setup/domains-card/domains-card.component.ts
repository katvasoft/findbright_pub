import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-domains-card',
  templateUrl: './domains-card.component.html',
  styleUrls: ['./domains-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomainsCardComponent implements OnInit {

  value = ``;

  constructor(private store: Store<fromApp.State>) { }

  saveDomain(event) {
    this.store.dispatch(AppActions.saveDomain({ param: event }));
  }

  ngOnInit(): void {
  }

}
