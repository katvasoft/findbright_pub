import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './dashboard/login/login.component';
import { Space120Component } from './dashboard/login/space120/space120.component';
import { LoginContainerComponent } from './dashboard/login/login-container/login-container.component';
import { SignUpFormComponent } from './dashboard/login/sign-up-form/sign-up-form.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { Space125Component } from './dashboard/sign-up/space125/space125.component';
import { RegisterContainerComponent } from './dashboard/sign-up/register-container/register-container.component';
import { ToastrModule } from 'ngx-toastr';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
  NbDatepickerModule,
  NbMediaBreakpoint,
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { RootEffects } from './state/root.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './state/app.reducer';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {RouteGuard} from './RouteGuard';
import { LIGHT_THEME } from './theme';

const mediaBreakpoints: NbMediaBreakpoint[] = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 320,
  },
  {
    name: 'md',
    width: 480,
  },
  {
    name: 'lg',
    width: 768,
  },
  {
    name: 'xl',
    width: 1024,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginContainerComponent,
    SignUpFormComponent,
    Space120Component,
    SignUpComponent,
    Space125Component,
    RegisterContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
    StoreModule.forRoot({ app: fromApp.reducer, router: routerReducer }),
    EffectsModule.forRoot(RootEffects),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
