import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../global/request-service.service';
import {Router} from '@angular/router';
import {ToastyService, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html'
})
export class WithBgImageComponent implements OnInit {
  isLogin = true;

  position: string = 'bottom-right';
  title: string;
  msg: string;
  showClose: boolean = true;
  timeout: number = 5000;
  theme: string = 'bootstrap';
  type: string = 'default';
  closeOther: boolean = false;

  constructor(private request: RequestService, private router: Router, private toastyService: ToastyService) {
  }

  ngOnInit() {
  }

  login(name: string, pwd: string) {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.request.postRequest('http://118.126.109.20:3000/user/', {
        user_name: name,
        user_pwd: pwd,
        handler: 2
      });
      resolve(result);
    });

    promise.then((value) => {
      if (value) {
        sessionStorage.setItem('User', value.toString());
        me.router.navigate(['accountmanage']);
      }else {
        me.isLogin = false;
      }
    });
  }


  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    let toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };
    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}
