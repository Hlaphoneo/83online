import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../services/rest.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public router : Router , public rest : RestService) {

   }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(["/Home"])
  }
}
