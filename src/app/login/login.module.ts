import {NgModule} from '@angular/core';
import {WithBgImageComponent} from './with-bg-image/with-bg-image.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginRoutes} from './login.routing';
import {SharedModule} from '../shared/shared.module';
import {RequestService} from '../global/request-service.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    SharedModule
  ],
  declarations: [WithBgImageComponent],
  providers: [RequestService]
})

export class LoginModule {
}
