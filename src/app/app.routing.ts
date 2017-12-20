import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'accountmanage',
      loadChildren: './account-manage/account-manage.module#AccountManageModule'
    },
    {
      path: 'indexmanage',
      loadChildren: './index-manage/index-manage.module#IndexManageModule'
    },
    {
      path: 'formmanage',
      loadChildren: './form-manage/form-manage.module#FormManageModule'
    },
    {
      path: 'mechanism',
      loadChildren: './mechanism/mechanism.module#MechanismModule'
    },
    {
      path: 'signupmanage',
      loadChildren: './signupmanage/signupmanage.module#SignupmanageModule'
    },
    {
      path: 'selectionmanage',
      loadChildren: './selection-manage/selection-manage.module#SelectionManageModule'
    },
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: []
}, {
  path: '**',
  redirectTo: 'error/404'
}];
