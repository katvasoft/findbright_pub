import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store, select } from '@ngrx/store';
import * as appSelectors from '../../../state/app.selectors';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  text = (item) => `${item.synonymList}`;

  sequenceSpace60$ = this.store.pipe(select(appSelectors.getStateSynonyms))
    .pipe(
      map(stateSynonyms => stateSynonyms),
    );

  constructor(private store: Store<fromApp.State>) { }

  removeSynonym(event,item) {
    this.store.dispatch(AppActions.removeSynonym({ param: {
  id: item.id
} }));
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getSynonyms({ param: null }));
  }

}
