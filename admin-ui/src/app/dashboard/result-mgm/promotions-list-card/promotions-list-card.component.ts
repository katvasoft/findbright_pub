import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromApp from '../../../state/app.reducer';
import * as appSelectors from '../../../state/app.selectors';
import { withLatestFrom, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as AppActions from '../../../state/app.actions';

@Component({
  selector: 'app-promotions-list-card',
  templateUrl: './promotions-list-card.component.html',
  styleUrls: ['./promotions-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionsListCardComponent implements OnInit {

  text = (item) => `${item.promotionName}`;

  sequenceSpace55$ = this.store.pipe(select(appSelectors.getStatePromotions))
    .pipe(
      map(statePromotions => statePromotions),
    );

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getPromotions({ param: null }));
  }

}
