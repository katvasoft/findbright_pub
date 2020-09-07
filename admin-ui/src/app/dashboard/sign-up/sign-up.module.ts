import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { Space125Component } from './space125/space125.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SignUpComponent, RegisterContainerComponent, Space125Component, SignUpForm1Component],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ]
})
export class SignUpModule { }
