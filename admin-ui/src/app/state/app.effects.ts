import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of, asyncScheduler, combineLatest } from 'rxjs';
import * as AppActions from './app.actions';
import { switchMap, map, catchError, withLatestFrom, tap, observeOn, share, take, mergeMap } from 'rxjs/operators';
import * as fromApp from './app.reducer';
import * as appSelectors from './app.selectors';
import { select, Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {

  private getDomains$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.getDomains.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.get(`${environment.apiUrl}/api/domain/account/`+accountid,{headers:headers});
    }),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    tap((result) => this.store.dispatch(AppActions.updateStateDomains({ stateDomains: result.data }))),
    observeOn(asyncScheduler),
    share(),
  ), { dispatch: false });

  private saveDomain$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.saveDomain.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId)),
      this.store.pipe(select(appSelectors.getUiDomainNameTxt))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid, uiDomainNameTxt]) => 
    {
      const headers = new HttpHeaders({'auth':token});
      return this.http.post(`${environment.apiUrl}/api/domain`, {
      'domainName' : uiDomainNameTxt.value,
        'accountid' : accountid,
      }, {headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getDomains) => {
      this.store.dispatch(AppActions.getDomains({ param: getDomains }));
      this.showSuccessToast('Domain saved');
      return this.getDomains$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    withLatestFrom(this.store.pipe(select(appSelectors.getUiDomainNameTxt))),
    map(([result, uiDomainNameTxt]) => {
      uiDomainNameTxt.value = ''
      return result.data;
    }),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    share(),
  ), { dispatch: false });

  private removeDomain$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.removeDomain.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.delete(`${environment.apiUrl}/api/domain/${param.id}`,{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getDomains) => {
      this.showSuccessToast('Domain removed');
      this.store.dispatch(AppActions.getDomains({ param: getDomains }));
      return this.getDomains$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private getSynonyms$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.getSynonyms.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.get(`${environment.apiUrl}/api/synonym/account/`+accountid,{headers: headers})
    }),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    tap((result) => this.store.dispatch(AppActions.updateStateSynonyms({ stateSynonyms: result.data }))),
    observeOn(asyncScheduler),
    share(),
  ), { dispatch: false });

  private saveSynonym$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.saveSynonym.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId)),
      this.store.pipe(select(appSelectors.getUiSynonymListTxt))
    ]).pipe(take(1))),
    switchMap(([param, token,accountid,uiSynonymListTxt]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.post(`${environment.apiUrl}/api/synonym`, {
 'synonymList' : uiSynonymListTxt.value,
 'accountid' :  accountid
},{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getSynonyms) => {
      this.showSuccessToast('Synonym list saved');
      this.store.dispatch(AppActions.getSynonyms({ param: getSynonyms }));
      return this.getSynonyms$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private removeSynonym$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.removeSynonym.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.delete(`${environment.apiUrl}/api/synonym/${param.id}`,{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getSynonyms) => {
      this.showSuccessToast('Synonym list removed');
      this.store.dispatch(AppActions.getSynonyms({ param: getSynonyms }));
      return this.getSynonyms$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private getPromotions$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.getPromotions.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param, token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.get(`${environment.apiUrl}/api/promotion/account/`+accountid,{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    tap((result) => this.store.dispatch(AppActions.updateStatePromotions({ statePromotions: result.data }))),
    observeOn(asyncScheduler),
    share(),
  ), { dispatch: false });

  private savePromotion$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.savePromotion.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUiPromotionActiveCheckbox)),
      this.store.pipe(select(appSelectors.getUiPromotionNameTxt)),
      this.store.pipe(select(appSelectors.getUiPromotionLimitWithKeywordsCheckbox)),
      this.store.pipe(select(appSelectors.getUiKeywordTxt)),
      this.store.pipe(select(appSelectors.getUiDateFromDatepicker)),
      this.store.pipe(select(appSelectors.getUiDateToDatepicker)),
      this.store.pipe(select(appSelectors.getUiContentTitleTxt)),
      this.store.pipe(select(appSelectors.getUiContentTxt)),
      this.store.pipe(select(appSelectors.getUiLinkTxt)),
      this.store.pipe(select(appSelectors.getUiThumbnailImageUrlTxt)),
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param, uiPromotionActiveCheckbox, uiPromotionNameTxt, uiPromotionLimitWithKeywordsCheckbox, uiKeywordTxt, uiDateFromDatepicker, uiDateToDatepicker, uiContentTitleTxt, uiContentTxt, uiLinkTxt, uiThumbnailImageUrlTxt,token,accountid]: any) => 
    {
      const headers = new HttpHeaders({'auth':token});
      return this.http.post(`https://katvasoft.eu.ngrok.io/api/promotion`, {
  'active' : uiPromotionActiveCheckbox.value,
  'promotionName' : uiPromotionNameTxt.value,
  'limitWithKeywords' : uiPromotionLimitWithKeywordsCheckbox.value,
  'keyword' : uiKeywordTxt.value,
  'dateFrom' : uiDateFromDatepicker.value,
  'dateTo' : uiDateToDatepicker.value,
  'title' : uiContentTitleTxt.value,
  'content' : uiContentTxt.value,
  'link' : uiLinkTxt.value,
  'thumbnailUrl' : uiThumbnailImageUrlTxt.value,
  'accountid' : accountid
},{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getPromotions) => {
      this.showSuccessToast('Promotion saved');
      this.store.dispatch(AppActions.getPromotions({ param: getPromotions }));
      return this.getPromotions$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private getUsers$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.getUsers.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => 
    {
      const headers = new HttpHeaders({'auth':token});
      return this.http.get(`${environment.apiUrl}/api/user/account/` + accountid, {headers: headers})
    }
    ),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    tap((result) => this.store.dispatch(AppActions.updateStateUsers({ stateUsers: result.data }))),
    observeOn(asyncScheduler),
    share(),
  ), { dispatch: false });

  private removeUser$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.removeUser.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId))
    ]).pipe(take(1))),
    switchMap(([param,token,accountid]) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.delete(`${environment.apiUrl}/api/user/${param.id}`,{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getUsers) => {
      this.showSuccessToast('User removed');
      this.store.dispatch(AppActions.getUsers({ param: getUsers }));
      return this.getUsers$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private saveUser$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.saveUser.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => combineLatest([of(param), 
      this.store.pipe(select(appSelectors.getUiUsernameTxt)),
      this.store.pipe(select(appSelectors.getUiEmailTxt)),
      this.store.pipe(select(appSelectors.getUiPwordTxt)),
      this.store.pipe(select(appSelectors.getUserToken)),
      this.store.pipe(select(appSelectors.getUserAccountId)),
    ]).pipe(take(1))),
    switchMap(([param, uiUsernameTxt, uiEmailTxt, uiPwordTxt,token,accountid]: any) => {
      const headers = new HttpHeaders({'auth':token});
      return this.http.post(`${environment.apiUrl}/api/user`, {
 'username' : uiUsernameTxt.value,
  'email' : uiEmailTxt.value,
  'pword' : uiPwordTxt.value,
  'accountid' : accountid
},{headers: headers})}),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap((getUsers) => {
      this.showSuccessToast('User saved');
      this.store.dispatch(AppActions.getUsers({ param: getUsers }));
      return this.getUsers$
        .pipe(
          map((result) => result && result.data ? result : { data: result, error: null }),
          catchError(error => of({ data: null, error })),
          take(1),
        );
    }),
    share(),
  ), { dispatch: false });

  private login$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.login.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => this.http.post(`${environment.apiUrl}/api/login`, param)),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap(res => {
      console.log('Login res :' ,res)
      return [
      this.store.dispatch(AppActions.loginFinished({loginResult : res.data})),
      this.store.dispatch(AppActions.loginSuccess(res.data))
    ]}),
    share()
    
   
  ), { dispatch: false });

  private loginSuccess$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.loginSuccess),
    tap(param => {
      console.log('Login success : ', param)
      return this.router.navigate(['home'])
    }),
    share()
  ), { dispatch: false })


  private register$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.signUp.type),
    map((action: { param: any }) => action.param),
    switchMap((param) => this.http.post(`${environment.apiUrl}/api/signUp`, param)),
    map(data => ({ data, error: null })),
    catchError(error => of({ data: null, error })),
    switchMap(res => {
      console.log('Login res :' ,res)
      return [
      this.store.dispatch(AppActions.signUpSuccess(res.data))
    ]}),
    share()  
  ), { dispatch: false });
   
  private signUpSuccess$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.signUpSuccess),
    tap(param => {
      console.log('Register success : ', param)
      
      this.showSuccessToast('Registration successful');
      return this.router.navigate(['login'])
    }),
    share()
  ), { dispatch: false })


  private showSuccessToast (msg: string, header : string = "Success") {

    this.toastr.success(msg,header, { timeOut: 5000});

  }

  private showErrorToast (msg: string, header: string = "Ooops..") {
    this.toastr.error(msg,header,{timeOut: 5000});
  }

  constructor(private store: Store<fromApp.State>,
    private http: HttpClient,
    private actions$: Actions,
    private toastr: ToastrService,
    private router: Router,) {
  }

}
