import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManageComponent } from './account-manage.component';
import {AccountManageRoutes} from './account-manage.routing';
import {RouterModule} from '@angular/router';
import {RequestService} from '../global/request-service.service';
import {SharedModule} from '../shared/shared.module';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountManageRoutes),
    SharedModule,
    ClipboardModule
  ],
  declarations: [AccountManageComponent],
  providers: [RequestService]
})
export class AccountManageModule { }
