import { Routes } from '@angular/router';
import {AccountManageComponent} from './account-manage.component';

export const AccountManageRoutes: Routes = [{
  path: '',
  component: AccountManageComponent,
  data: {
    heading: 'AccountManage',
    breadcrumb: '账号管理'
  }
}];
