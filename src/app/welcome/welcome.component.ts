import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../services/rest.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  jobs            :any;

  constructor(public router : Router , public rest : RestService) {
    // this.router.navigate(["/home"])
      this.jobs = 8450;
      setInterval(() => {
          this.jobs = this.jobs + Math.floor((Math.random() * 5) + 0);
      },Math.floor((Math.random() * 1000*5) + 0));
   }


  continue(){
    this.router.navigate(["/Home"])
  }
  navigate(location : string){
      if(location == "login"){
        this.router.navigate(["/users/sign_in"])
      }
      if(location == "signup"){
        this.router.navigate(["/users/sign_up"])
      }
  }

  adjust_textarea (h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
}
