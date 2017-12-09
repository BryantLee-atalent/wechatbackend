import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../global/request-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html'
})
export class WithBgImageComponent implements OnInit {
  isLogin = true;
  constructor(private request: RequestService, private router: Router) {
  }

  ngOnInit() {
  }

  login(name: string, pwd: string) {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.request.postRequest('http://118.126.109.20:3000/', {
        user_name: name,
        user_pwd: pwd,
        handler: 2
      });
      resolve(result);
    });

    promise.then((value) => {
      if (value[0]) {
        sessionStorage.setItem('User', value[0].user_name);
        me.router.navigate(['accountmanage']);
      }else {
        me.isLogin = false;
      }
    });
  }

}
