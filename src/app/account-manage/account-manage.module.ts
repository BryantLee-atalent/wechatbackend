import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManageComponent } from './account-manage.component';
import {AccountManageRoutes} from './account-manage.routing';
import {RouterModule} from '@angular/router';
import {RequestService} from '../global/request-service.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountManageRoutes),
    SharedModule
  ],
  declarations: [AccountManageComponent],
  providers: [RequestService]
})
export class AccountManageModule { }
