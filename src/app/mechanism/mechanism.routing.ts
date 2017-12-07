import { Routes } from '@angular/router';
import {MechanismComponent} from './mechanism.component';

export const MechanismManageRoutes: Routes = [{
  path: '',
  component: MechanismComponent,
  data: {
    heading: ' Mechanism',
    breadcrumb: '机构管理'
  }
}];
