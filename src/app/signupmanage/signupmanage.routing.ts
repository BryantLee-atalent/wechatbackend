import { Routes } from '@angular/router';
import {SignupmanageComponent} from './signupmanage.component';

export const SignupmanageManageRoutes: Routes = [{
  path: '',
  component: SignupmanageComponent,
  data: {
    heading: ' Signupmanage',
    breadcrumb: '报名审核'
  }
}];
