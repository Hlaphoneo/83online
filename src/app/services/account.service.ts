import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AccountService {

  constructor(public auth : AuthenticationService) {

   }

   signin(email : string , password : string){
      this.auth.emailAuthenticate(email,password);
   }

}
