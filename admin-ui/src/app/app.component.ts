import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import * as appSelectors from './state/app.selectors';
import * as fromApp from './state/app.reducer';
import { BkLayout } from '@uibakery/kit';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  token$ = this.store.pipe(select(appSelectors.getUserToken))
  .pipe(
    map(token => token),
  );

  defaultLayout: BkLayout = {
    paddings: {
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingTopUnit: "px",
      paddingRightUnit: "px",
      paddingBottomUnit: "px",
      paddingLeftUnit: "px"
    },
    header: true,
    sidebar: false
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => this.getPaddingCssValue(layout.paddings)),
    );

  items = [
  	{
  		title: 'Dashboard',
  		link: '/home',
  		children: [
  			{
  				title: 'setup',
  				link: '/home/setup'
  			},
  			{
  				title: 'resultMgm',
  				link: '/home/resultMgm'
  			},
  			{
  				title: 'users',
  				link: '/home/users'
  			},
  			{
  				title: 'billing',
  				link: '/home/billing'
  			},
  			{
  				title: 'feedback',
  				link: '/home/feedback'
  			},
  			{
  				title: 'login',
  				link: '/home/login'
  			}
  		]
  	}
  ];

  constructor(private router: Router,private store: Store<fromApp.State>) {
  }

  private getPaddingCssValue(paddings): string {
    return `${paddings.paddingTop}${paddings.paddingTopUnit} ` +
           `${paddings.paddingRight}${paddings.paddingRightUnit} ` +
           `${paddings.paddingBottom}${paddings.paddingBottomUnit} ` +
           `${paddings.paddingLeft}${paddings.paddingLeftUnit}`;
  }
}
