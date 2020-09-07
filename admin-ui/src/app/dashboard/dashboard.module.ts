import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ClicksQuickStatsComponent } from './clicks-quick-stats/clicks-quick-stats.component';
import { Space10Component } from './space10/space10.component';
import { CtrQuickStatsComponent } from './ctr-quick-stats/ctr-quick-stats.component';
import { PagesIndexQuickStatsComponent } from './pages-index-quick-stats/pages-index-quick-stats.component';
import { QuickStatsSearchesSpaceComponent } from './quick-stats-searches-space/quick-stats-searches-space.component';
import { SearchesGraphComponentComponent } from './searches-graph-component/searches-graph-component.component';
import { TopKeywordsCardComponent } from './top-keywords-card/top-keywords-card.component';
import { NoHitsKeywordCardComponent } from './no-hits-keyword-card/no-hits-keyword-card.component';
import { SharedModule } from '../shared/shared.module';
import { SetupComponent } from './setup/setup.component';
import { MainSpaceComponent } from './setup/main-space/main-space.component';
import { DomainsCardComponent } from './setup/domains-card/domains-card.component';
import { IndexingCardComponent } from './setup/indexing-card/indexing-card.component';
import { LookAndFeelCardComponent } from './setup/look-and-feel-card/look-and-feel-card.component';
import { ResultMgmComponent } from './result-mgm/result-mgm.component';
import { SynomymsCardComponent } from './result-mgm/synomyms-card/synomyms-card.component';
import { SynonymEditTextComponent } from './result-mgm/synonym-edit-text/synonym-edit-text.component';
import { CardComponent } from './result-mgm/card/card.component';
import { PromotionsListCardComponent } from './result-mgm/promotions-list-card/promotions-list-card.component';
import { PromotionEditCardComponent } from './result-mgm/promotion-edit-card/promotion-edit-card.component';
import { UsersComponent } from './users/users.component';
import { UserListComponentComponent } from './users/user-list-component/user-list-component.component';
import { UserEditCardComponent } from './users/user-edit-card/user-edit-card.component';
import { BillingComponent } from './billing/billing.component';
import { PlanCardComponent } from './billing/plan-card/plan-card.component';
import { SubscriptionInformationCardComponent } from './billing/subscription-information-card/subscription-information-card.component';
import { InvoicesListCardComponent } from './billing/invoices-list-card/invoices-list-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackCardComponent } from './feedback/feedback-card/feedback-card.component';






@NgModule({
  declarations: [DashboardComponent, ClicksQuickStatsComponent, Space10Component, CtrQuickStatsComponent, PagesIndexQuickStatsComponent, QuickStatsSearchesSpaceComponent, SearchesGraphComponentComponent, TopKeywordsCardComponent, NoHitsKeywordCardComponent, SetupComponent, MainSpaceComponent, DomainsCardComponent, IndexingCardComponent, LookAndFeelCardComponent, ResultMgmComponent, SynomymsCardComponent, SynonymEditTextComponent, CardComponent, PromotionsListCardComponent, PromotionEditCardComponent, UsersComponent, UserListComponentComponent, UserEditCardComponent, BillingComponent, PlanCardComponent, SubscriptionInformationCardComponent, InvoicesListCardComponent, FeedbackComponent, FeedbackCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
