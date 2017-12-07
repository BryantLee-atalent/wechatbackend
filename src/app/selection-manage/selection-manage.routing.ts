import { Routes } from '@angular/router';
import {SelectionManageComponent} from './selection-manage.component';

export const SelectionManageRoutes: Routes = [{
  path: '',
  component: SelectionManageComponent,
  data: {
    heading: ' SmallFormManage',
    breadcrumb: '评选结果'
  }
}];
