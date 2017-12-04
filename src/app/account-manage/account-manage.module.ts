import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManageComponent } from './account-manage.component';
import {AccountManageRoutes} from './account-manage.routing';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountManageRoutes),
    HttpClientModule
  ],
  declarations: [AccountManageComponent]
})
export class AccountManageModule { }
