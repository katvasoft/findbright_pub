import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as fromRouter from '@ngrx/router-store';

  
export const getRouterState = createFeatureSelector<any>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

export const getActiveRoute = createSelector(selectUrl, selectQueryParams, (url, queryParams) => {
  return { url, queryParams };
});


export const getAppState = createFeatureSelector<fromApp.State>('app');

export const getStateDomains = createSelector(getAppState, (state: fromApp.State) => state.stateDomains);

export const getStatePromotions = createSelector(getAppState, (state: fromApp.State) => state.statePromotions);

export const getStateSynonyms = createSelector(getAppState, (state: fromApp.State) => state.stateSynonyms);

export const getStateUsers = createSelector(getAppState, (state: fromApp.State) => state.stateUsers);

export const getUiDomainNameTxt = createSelector(getAppState, (state: fromApp.State) => state.uiDomainNameTxt);

export const getUiSearchBarLookFeelTxt = createSelector(getAppState, (state: fromApp.State) => state.uiSearchBarLookFeelTxt);

export const getUiSearchResultTxt = createSelector(getAppState, (state: fromApp.State) => state.uiSearchResultTxt);

export const getUiSynonymListTxt = createSelector(getAppState, (state: fromApp.State) => state.uiSynonymListTxt);

export const getUiPromotionActiveCheckbox = createSelector(getAppState, (state: fromApp.State) => state.uiPromotionActiveCheckbox);

export const getUiPromotionNameTxt = createSelector(getAppState, (state: fromApp.State) => state.uiPromotionNameTxt);

export const getUiPromotionLimitWithKeywordsCheckbox = createSelector(getAppState, (state: fromApp.State) => state.uiPromotionLimitWithKeywordsCheckbox);

export const getUiKeywordTxt = createSelector(getAppState, (state: fromApp.State) => state.uiKeywordTxt);

export const getUiDateFromDatepicker = createSelector(getAppState, (state: fromApp.State) => state.uiDateFromDatepicker);

export const getUiDateToDatepicker = createSelector(getAppState, (state: fromApp.State) => state.uiDateToDatepicker);

export const getUiContentTitleTxt = createSelector(getAppState, (state: fromApp.State) => state.uiContentTitleTxt);

export const getUiContentTxt = createSelector(getAppState, (state: fromApp.State) => state.uiContentTxt);

export const getUiLinkTxt = createSelector(getAppState, (state: fromApp.State) => state.uiLinkTxt);

export const getUiThumbnailImageUrlTxt = createSelector(getAppState, (state: fromApp.State) => state.uiThumbnailImageUrlTxt);

export const getUiUsernameTxt = createSelector(getAppState, (state: fromApp.State) => state.uiUsernameTxt);

export const getUiEmailTxt = createSelector(getAppState, (state: fromApp.State) => state.uiEmailTxt);

export const getUiPwordTxt = createSelector(getAppState, (state: fromApp.State) => state.uiPwordTxt);

export const getUiPwordAgainTxt = createSelector(getAppState, (state: fromApp.State) => state.uiPwordAgainTxt);

export const getUiCheckbox2 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox2);

export const getUiInvoicesTable = createSelector(getAppState, (state: fromApp.State) => state.uiInvoicesTable);

export const getUiFeedbackTxt = createSelector(getAppState, (state: fromApp.State) => state.uiFeedbackTxt);

export const getUiLoginUsernameTxt = createSelector(getAppState, (state: fromApp.State) => state.uiLoginUsernameTxt);

export const getUiLoginPasswordTxt = createSelector(getAppState, (state: fromApp.State) => state.uiLoginPasswordTxt);

export const getUserToken = createSelector(getAppState,(state: fromApp.State) => state.token);

export const getUserAccountId = createSelector(getAppState, (state: fromApp.State) => state.accountid);
