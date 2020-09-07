import { createAction, props } from '@ngrx/store';

export const updateStateDomains = createAction('[app] Update State Domains', props<{ stateDomains: any }>());

export const updateStatePromotions = createAction('[app] Update State Promotions', props<{ statePromotions: any }>());

export const updateStateSynonyms = createAction('[app] Update State Synonyms', props<{ stateSynonyms: any }>());

export const updateStateUsers = createAction('[app] Update State Users', props<{ stateUsers: any }>());

export const getDomains = createAction('[App] Get Domains', props<{ param: any }>());

export const updateUiDomainNameTxt = createAction('[app] Update Ui Domain Name Txt', props<{
  param: {
    value?: any,
  }}>());

export const saveDomain = createAction('[App] Save Domain', props<{ param: any }>());

export const removeDomain = createAction('[App] Remove Domain', props<{ param: any }>());

export const updateUiSearchBarLookFeelTxt = createAction('[app] Update Ui Search Bar Look Feel Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiSearchResultTxt = createAction('[app] Update Ui Search Result Txt', props<{
  param: {
    value?: any,
  }}>());

export const getSynonyms = createAction('[App] Get Synonyms', props<{ param: any }>());

export const saveSynonym = createAction('[App] Save Synonym', props<{ param: any }>());

export const updateUiSynonymListTxt = createAction('[app] Update Ui Synonym List Txt', props<{
  param: {
    value?: any,
  }}>());

export const removeSynonym = createAction('[App] Remove Synonym', props<{ param: any }>());

export const getPromotions = createAction('[App] Get Promotions', props<{ param: any }>());

export const updateUiPromotionActiveCheckbox = createAction('[app] Update Ui Promotion Active Checkbox', props<{
  param: {
    value?: any,
  }}>());

export const updateUiPromotionNameTxt = createAction('[app] Update Ui Promotion Name Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiPromotionLimitWithKeywordsCheckbox = createAction('[app] Update Ui Promotion Limit With Keywords Checkbox', props<{
  param: {
    value?: any,
  }}>());

export const updateUiKeywordTxt = createAction('[app] Update Ui Keyword Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiDateFromDatepicker = createAction('[app] Update Ui Date From Datepicker', props<{
  param: {
    value?: any,
  }}>());

export const updateUiDateToDatepicker = createAction('[app] Update Ui Date To Datepicker', props<{
  param: {
    value?: any,
  }}>());

export const updateUiContentTitleTxt = createAction('[app] Update Ui Content Title Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiContentTxt = createAction('[app] Update Ui Content Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiLinkTxt = createAction('[app] Update Ui Link Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiThumbnailImageUrlTxt = createAction('[app] Update Ui Thumbnail Image Url Txt', props<{
  param: {
    value?: any,
  }}>());

export const savePromotion = createAction('[App] Save Promotion', props<{ param: any }>());

export const getUsers = createAction('[App] Get Users', props<{ param: any }>());

export const removeUser = createAction('[App] Remove User', props<{ param: any }>());

export const updateUiUsernameTxt = createAction('[app] Update Ui Username Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiEmailTxt = createAction('[app] Update Ui Email Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiPwordTxt = createAction('[app] Update Ui Pword Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiPwordAgainTxt = createAction('[app] Update Ui Pword Again Txt', props<{
  param: {
    value?: any,
  }}>());

export const saveUser = createAction('[App] Save User', props<{ param: any }>());

export const updateUiCheckbox2 = createAction('[app] Update Ui Checkbox2', props<{
  param: {
    value?: any,
  }}>());

export const updateUiInvoicesTable = createAction('[app] Update Ui Invoices Table', props<{
  param: {
    selectedRow?: any,
    deletedRow?: any,
    newRow?: any,
    editedRow?: any,
  }}>());

export const updateUiFeedbackTxt = createAction('[app] Update Ui Feedback Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiLoginUsernameTxt = createAction('[app] Update Ui Login Username Txt', props<{
  param: {
    value?: any,
  }}>());

export const updateUiLoginPasswordTxt = createAction('[app] Update Ui Login Password Txt', props<{
  param: {
    value?: any,
  }}>());

  export const login = createAction('[App] Login', props<{param : any}>());

  export const loginSuccess = createAction('[App] Login success', props<any>())

  export const loginFinished = createAction('[App] Login finished', props<{loginResult : any}>());

  export const signUp = createAction('[App] register', props<{param : any}>());

  export const signUpSuccess = createAction('[App] register success', props<any>());