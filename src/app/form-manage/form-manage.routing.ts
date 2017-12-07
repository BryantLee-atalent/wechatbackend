import { Routes } from '@angular/router';
import {FormManageComponent} from './form-manage.component';

export const FormManageRoutes: Routes = [{
  path: '',
  component: FormManageComponent,
  data: {
    heading: ' FormManage',
    breadcrumb: '榜单管理'
  }
}];
