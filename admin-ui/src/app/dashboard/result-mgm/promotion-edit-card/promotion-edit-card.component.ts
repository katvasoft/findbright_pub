import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-promotion-edit-card',
  templateUrl: './promotion-edit-card.component.html',
  styleUrls: ['./promotion-edit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionEditCardComponent implements OnInit {

  value = false;

  label = `Active`;

  value1 = ``;

  value2 = false;

  label1 = `Limit with keywords`;

  value3 = ``;

  value4 = undefined;

  value5 = undefined;

  value6 = ``;

  value7 = ``;

  value8 = ``;

  value9 = ``;

  constructor(private store: Store<fromApp.State>) { }

  savePromotion(event) {
    this.store.dispatch(AppActions.savePromotion({ param: event }));
  }

  ngOnInit(): void {
  }

}
