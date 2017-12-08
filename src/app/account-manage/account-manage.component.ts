import { Component, OnInit } from '@angular/core';
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
  url = 'http://118.126.109.20:3000/' + this.page;
  loaded = false;
  constructor(private http: RequestService) { }

  ngOnInit() {
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

}
