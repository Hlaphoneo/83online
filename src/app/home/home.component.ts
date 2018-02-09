import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public account : AccountService) {

  }

  signOut(){
    this.account.signOut();
  }
}
