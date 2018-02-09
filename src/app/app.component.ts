import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public rest : RestService, public router : Router){
      // this.router.navigate(["/home"])
  }

}
