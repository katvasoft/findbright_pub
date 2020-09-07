import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as appSelectors from './state/app.selectors';
import { select, Store } from '@ngrx/store';

@Injectable()
export class RouteGuard implements CanActivate {


    constructor(private store: Store) {}
    canActivate(): Promise<boolean> {
        return new Promise((resolve,reject) => {
            this.store.pipe(select(appSelectors.getUserToken)).subscribe(
                result => {
                    console.log('Route guard result :', result);
                    if(result) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            )
        })
        
       
    }

}