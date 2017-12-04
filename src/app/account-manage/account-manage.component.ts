import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css']
})
export class AccountManageComponent implements OnInit {
  result: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/account').subscribe(data => {
      this.result = data;
    })
  }

}
