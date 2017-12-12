import {Component, OnInit} from '@angular/core';
import {RequestService} from '../global/request-service.service';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css']
})
export class AccountManageComponent implements OnInit {
  result: any = {
    data: [],
    count: ''
  };
  page = 1;
  url = 'http://118.126.109.20:3000/user/' + this.page;
  loaded = false;
  clickdata: any = {
    user_name: '',
    user_phone: ''
  };
  addSuccess = false;
  resetSuccess = false;
  constructor(private http: RequestService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.getRequest(me.url);
      resolve(result);
    });

    promise.then((value) => {
      me.loaded = true;
      me.result = value;
    });
  }

  delete(id: number) {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.postRequest('http://118.126.109.20:3000/user/', {
        user_id: id,
        handler: -1
      });
      resolve(result);
    });

    promise.then((value) => {
      me.loadData();
    });
  }

  addUser() {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.postRequest('http://118.126.109.20:3000/user/', {
        user_name: me.clickdata.user_name,
        user_phone: me.clickdata.user_phone,
        handler: 1
      });
      resolve(result);
    });

    promise.then((value) => {
      me.addSuccess = true;
      me.loadData();
    });
  }

  searchData(string: any) {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.postRequest('http://118.126.109.20:3000/user/', {
        user_name: string,
        handler: 4
      });
      resolve(result);
    });

    promise.then((value) => {
      console.log(value);
      me.loaded = true;
      me.result.data = value;
    });
  }

  restartPwd() {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.postRequest('http://118.126.109.20:3000/user/', {
        user_id: me.clickdata.user_id,
        handler: 5
      });
      resolve(result);
    });

    promise.then((value) => {
      me.resetSuccess = true;
    });
  }

  updateAccount(account: string) {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      const result = me.http.postRequest('http://118.126.109.20:3000/user/', {
        user_id: me.clickdata.user_id,
        user_name: account,
        handler: 3
      });
      resolve(result);
    });

    promise.then((value) => {
      me.loadData();
    });
  }

}
