import { Routes } from '@angular/router';
import {SmallformManageComponent} from './smallform-manage.component';

export const SmallformManageRoutes: Routes = [{
  path: '',
  component: SmallformManageComponent,
  data: {
    heading: ' SmallFormManage',
    breadcrumb: '分榜单管理'
  }
}];
