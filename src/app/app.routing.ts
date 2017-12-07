import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [ {
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
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
      path: 'smallformmanage',
      loadChildren: './smallform-manage/smallform-manage.module#SmallformManageModule'
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
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
