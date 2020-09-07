import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-synomyms-card',
  templateUrl: './synomyms-card.component.html',
  styleUrls: ['./synomyms-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynomymsCardComponent implements OnInit {

  constructor(private store: Store<fromApp.State>) { }

  saveSynonym(event) {
    this.store.dispatch(AppActions.saveSynonym({ param: event }));
  }

  ngOnInit(): void {
  }

}
