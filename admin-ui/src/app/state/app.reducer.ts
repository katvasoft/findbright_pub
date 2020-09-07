import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export interface State {
  uiLoginPasswordTxt: {
      value: any;
  };
  uiLoginUsernameTxt: {
      value: any;
  };
  uiFeedbackTxt: {
      value: any;
  };
  uiInvoicesTable: {
      selectedRow: any;
      deletedRow: any;
      newRow: any;
      editedRow: any;
  };
  uiCheckbox2: {
      value: any;
  };
  uiPwordAgainTxt: {
      value: any;
  };
  uiPwordTxt: {
      value: any;
  };
  uiEmailTxt: {
      value: any;
  };
  uiUsernameTxt: {
      value: any;
  };
  uiThumbnailImageUrlTxt: {
      value: any;
  };
  uiLinkTxt: {
      value: any;
  };
  uiContentTxt: {
      value: any;
  };
  uiContentTitleTxt: {
      value: any;
  };
  uiDateToDatepicker: {
      value: any;
  };
  uiDateFromDatepicker: {
      value: any;
  };
  uiKeywordTxt: {
      value: any;
  };
  uiPromotionLimitWithKeywordsCheckbox: {
      value: any;
  };
  uiPromotionNameTxt: {
      value: any;
  };
  uiPromotionActiveCheckbox: {
      value: any;
  };
  uiSynonymListTxt: {
      value: any;
  };
  uiSearchResultTxt: {
      value: any;
  };
  uiSearchBarLookFeelTxt: {
      value: any;
  };
  uiDomainNameTxt: {
      value: any;
  };
  stateUsers: any;
  stateSynonyms: any;
  statePromotions: any;
  stateDomains: any;
  token : any;
  accountid : any;
}

const initialState: State = {
  uiLoginPasswordTxt: {
      value: '',
  },
  uiLoginUsernameTxt: {
      value: '',
  },
  uiFeedbackTxt: {
      value: '',
  },
  uiInvoicesTable: {
      selectedRow: {},
      deletedRow: {},
      newRow: {},
      editedRow: {},
  },
  uiCheckbox2: {
      value: false,
  },
  uiPwordAgainTxt: {
      value: '',
  },
  uiPwordTxt: {
      value: '',
  },
  uiEmailTxt: {
      value: '',
  },
  uiUsernameTxt: {
      value: '',
  },
  uiThumbnailImageUrlTxt: {
      value: '',
  },
  uiLinkTxt: {
      value: '',
  },
  uiContentTxt: {
      value: '',
  },
  uiContentTitleTxt: {
      value: '',
  },
  uiDateToDatepicker: {
      value: new Date(),
  },
  uiDateFromDatepicker: {
      value: new Date(),
  },
  uiKeywordTxt: {
      value: '',
  },
  uiPromotionLimitWithKeywordsCheckbox: {
      value: false,
  },
  uiPromotionNameTxt: {
      value: '',
  },
  uiPromotionActiveCheckbox: {
      value: false,
  },
  uiSynonymListTxt: {
      value: '',
  },
  uiSearchResultTxt: {
      value: '',
  },
  uiSearchBarLookFeelTxt: {
      value: '',
  },
  uiDomainNameTxt: {
      value: '',
  },
  stateUsers: [],
  stateSynonyms: [],
  statePromotions: [],
  stateDomains: [],
  token : '',
  accountid : ''
};

export const reducer = createReducer(
  initialState,
  on(AppActions.updateUiLoginPasswordTxt, (state: State, changes) => ({ ...state, uiLoginPasswordTxt: { ...state.uiLoginPasswordTxt, ...changes.param }})),
  on(AppActions.updateUiLoginUsernameTxt, (state: State, changes) => ({ ...state, uiLoginUsernameTxt: { ...state.uiLoginUsernameTxt, ...changes.param }})),
  on(AppActions.updateUiFeedbackTxt, (state: State, changes) => ({ ...state, uiFeedbackTxt: { ...state.uiFeedbackTxt, ...changes.param }})),
  on(AppActions.updateUiInvoicesTable, (state: State, changes) => ({ ...state, uiInvoicesTable: { ...state.uiInvoicesTable, ...changes.param }})),
  on(AppActions.updateUiCheckbox2, (state: State, changes) => ({ ...state, uiCheckbox2: { ...state.uiCheckbox2, ...changes.param }})),
  on(AppActions.updateUiPwordAgainTxt, (state: State, changes) => ({ ...state, uiPwordAgainTxt: { ...state.uiPwordAgainTxt, ...changes.param }})),
  on(AppActions.updateUiPwordTxt, (state: State, changes) => ({ ...state, uiPwordTxt: { ...state.uiPwordTxt, ...changes.param }})),
  on(AppActions.updateUiEmailTxt, (state: State, changes) => ({ ...state, uiEmailTxt: { ...state.uiEmailTxt, ...changes.param }})),
  on(AppActions.updateUiUsernameTxt, (state: State, changes) => ({ ...state, uiUsernameTxt: { ...state.uiUsernameTxt, ...changes.param }})),
  on(AppActions.updateUiThumbnailImageUrlTxt, (state: State, changes) => ({ ...state, uiThumbnailImageUrlTxt: { ...state.uiThumbnailImageUrlTxt, ...changes.param }})),
  on(AppActions.updateUiLinkTxt, (state: State, changes) => ({ ...state, uiLinkTxt: { ...state.uiLinkTxt, ...changes.param }})),
  on(AppActions.updateUiContentTxt, (state: State, changes) => ({ ...state, uiContentTxt: { ...state.uiContentTxt, ...changes.param }})),
  on(AppActions.updateUiContentTitleTxt, (state: State, changes) => ({ ...state, uiContentTitleTxt: { ...state.uiContentTitleTxt, ...changes.param }})),
  on(AppActions.updateUiDateToDatepicker, (state: State, changes) => ({ ...state, uiDateToDatepicker: { ...state.uiDateToDatepicker, ...changes.param }})),
  on(AppActions.updateUiDateFromDatepicker, (state: State, changes) => ({ ...state, uiDateFromDatepicker: { ...state.uiDateFromDatepicker, ...changes.param }})),
  on(AppActions.updateUiKeywordTxt, (state: State, changes) => ({ ...state, uiKeywordTxt: { ...state.uiKeywordTxt, ...changes.param }})),
  on(AppActions.updateUiPromotionLimitWithKeywordsCheckbox, (state: State, changes) => ({ ...state, uiPromotionLimitWithKeywordsCheckbox: { ...state.uiPromotionLimitWithKeywordsCheckbox, ...changes.param }})),
  on(AppActions.updateUiPromotionNameTxt, (state: State, changes) => ({ ...state, uiPromotionNameTxt: { ...state.uiPromotionNameTxt, ...changes.param }})),
  on(AppActions.updateUiPromotionActiveCheckbox, (state: State, changes) => ({ ...state, uiPromotionActiveCheckbox: { ...state.uiPromotionActiveCheckbox, ...changes.param }})),
  on(AppActions.updateUiSynonymListTxt, (state: State, changes) => ({ ...state, uiSynonymListTxt: { ...state.uiSynonymListTxt, ...changes.param }})),
  on(AppActions.updateUiSearchResultTxt, (state: State, changes) => ({ ...state, uiSearchResultTxt: { ...state.uiSearchResultTxt, ...changes.param }})),
  on(AppActions.updateUiSearchBarLookFeelTxt, (state: State, changes) => ({ ...state, uiSearchBarLookFeelTxt: { ...state.uiSearchBarLookFeelTxt, ...changes.param }})),
  on(AppActions.updateUiDomainNameTxt, (state: State, changes) => ({ ...state, uiDomainNameTxt: { ...state.uiDomainNameTxt, ...changes.param }})),
  on(AppActions.updateStateUsers, (state: State, { stateUsers }) => ({ ...state, stateUsers })),
  on(AppActions.updateStateSynonyms, (state: State, { stateSynonyms }) => ({ ...state, stateSynonyms })),
  on(AppActions.updateStatePromotions, (state: State, { statePromotions }) => ({ ...state, statePromotions })),
  on(AppActions.updateStateDomains, (state: State, { stateDomains }) => ({ ...state, stateDomains })),
  on(AppActions.loginFinished,(state: State, { loginResult }) => ({ ...state, ...loginResult }))
);
    