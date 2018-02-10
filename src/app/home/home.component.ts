import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { AccountService } from '../services/account.service';

import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  percent : any;
  foods = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  methodOfComm = [
   {value: 'email', viewValue: 'Email'},
   {value: 'phone', viewValue: 'Phone'}
 ];
  yesorno = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  constructor(public account : AccountService) {
    this.percent = 1;

      setInterval(()=> {
          this.percent = this.percent+10;
          // alert("tsting")
          // console.log(this.percent);
          if(this.percent > 100)
            this.percent = 0;
      }, 1000);
  }

  signOut(){
    this.account.signOut();
  }

  next(index : string){
    $("."+index).fadeOut(600);
    if(index == "basic_info"){
      setTimeout(() => {
        $(".idnumber").show()
      }, 600);
    }
    if(index == "contact"){
      setTimeout(() => {
        $(".contact2").show()

      }, 600);
    }
    if(index == "idnumber"){
      setTimeout(() => {
        $(".disability").show()

      }, 600);
    }
    if(index == "disability"){
      setTimeout(() => {
        $(".cmrecord").show()

      }, 600);
    }
    if(index == "cmrecord"){
      setTimeout(() => {
        $(".dismiss").show()

      }, 600);
    }
    if(index == "dismiss"){
      setTimeout(() => {
        $(".basic_contact").show()

      }, 600);
    }
    if(index == "basic_contact"){
      setTimeout(() => {
        $(".preferred").show()

      }, 600);
    }
    if(index == "preferred"){
      setTimeout(() => {
        $(".physical").show()

      }, 600);
    }
    if(index == "physical"){
      setTimeout(() => {
        $(".postal").show()

      }, 600);
    }
    if(index == "postal"){
      setTimeout(() => {
        $(".matric").show()

      }, 600);
    }
    if(index == "matric"){
      setTimeout(() => {
        $(".qualifications").show()

      }, 600);
    }
    if(index == "qualifications"){
      setTimeout(() => {
        $(".government").show()

      }, 600);
    }
    if(index == "government"){
      setTimeout(() => {
        $(".experience").show()

      }, 600);
    }
    if(index == "experience"){
      setTimeout(() => {
        $(".reference").show()

      }, 600);
    }
    if(index == "reference"){
      setTimeout(() => {
        $(".finish").show()

      }, 600);
    }
    if(index == "finish"){
      setTimeout(() => {
        $(".dashboard").show()

      }, 600);
    }


  }
}
