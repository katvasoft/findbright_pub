import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store, select } from '@ngrx/store';
import * as appSelectors from '../../../state/app.selectors';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-indexing-card',
  templateUrl: './indexing-card.component.html',
  styleUrls: ['./indexing-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexingCardComponent implements OnInit {

  text = (item) => `${item.domainName}`;

  text1 = (item) => `${item.lastCrawl}`;

  sequenceSpace36$ = this.store.pipe(select(appSelectors.getStateDomains))
    .pipe(
      map(stateDomains => stateDomains),
    );

  constructor(private store: Store<fromApp.State>) { }

  removeDomain(event,item) {
    this.store.dispatch(AppActions.removeDomain({ param: {
  id: item.id
} }));
  }

  ngOnInit(): void {
  }

}
