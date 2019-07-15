import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FormsModule,
    SharedModule
  ],
  exports: [SignUpComponent]
})
export class AuthModule {}
