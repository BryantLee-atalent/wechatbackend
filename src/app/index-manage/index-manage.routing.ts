import { Routes } from '@angular/router';
import { IndexManageComponent} from './index-manage.component';

export const IndexManageRoutes: Routes = [{
  path: '',
  component: IndexManageComponent,
  data: {
    heading: 'AccountManage',
    breadcrumb: '首页管理'
  }
}];
