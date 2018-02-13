import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { AccountService } from '../services/account.service';
import { UserdataService } from '../services/userdata.service';
import { Router } from '@angular/router';


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
  disability = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  cmrecord = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  citizen = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  permit = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  government = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  employment = [
   {value: 'yes', viewValue: 'Yes'},
   {value: 'no', viewValue: 'No'}
 ];
  gender = [
   {value: 'male', viewValue: 'Male'},
   {value: 'female', viewValue: 'Female'}
 ];

 //qualifications snapshort
 index: any;

 institution   : any;
 yearObtained  : any;
 qualification : any;
 //work snapshot
 employer   : any;
 position  : any;
 totalYears : any;

  constructor(public userData : UserdataService , public router : Router ,  public account : AccountService) {
    this.percent = 1;
    this.index = 1;
  }

  ngOnInit() {}


  addReference(){
    this.userData.addReference();
  }
  addQualification(){
    this.userData.addQualification();
  }
  addWorkExperience(){
    this.userData.addWorkExperience();
  }
  update(level : string , stage : string){
        let state = this.validate(level,stage);
        if(state == true)
            this.next(stage) //moves to the next stage

        //if the user doest not have ny qualifications pass them to the next state
        if(stage == "qualifications" ){
            if(this.userData.profile.education.qualif == true){
              this.next(stage) //moves to the next stage
            }
        }
        console.log(state)
      if(stage == "experience" ){
        if(this.userData.profile.workExp.hasExperience == true){
          this.next(stage) //moves to the next stage
        }
      }
  }
  /*
    level : contact / education / basic info
    state : state 1 of contact , state 2 of contact .
  */
  viewUpdate(element : string){
    if(element == "education"){
            console.log(this.userData.profile.education.qualif)
            if(this.userData.profile.education.qualif == false){
              $('.education').attr('disabled',true);
              $('.edu-button').hide();
            }
            else{
              $('.edu-button').show();
              $('.education').attr('disabled',false);

            }
      }

      if(element == "work"){
        console.log(this.userData.profile.workExp.hasExperience)
        if(this.userData.profile.workExp.hasExperience == false){
          $('.work').attr('disabled',true);
          $('.button-work').hide();
        }
        else{
          $('.button-work').show();
          $('.work').attr('disabled',false);

        }
      }
  }
  validate(level : string ,  stage : string){
    return this.userData.validate(level , stage);
  }
  signOut(){
    this.account.signOut();
  }
  navigate(){
    this.router.navigate(['/dashboard'])
  }
  next(index : string){
    this.index = this.index + 1 //increasing the progress bar
    this.percent = (this.index / 16)*100;

    console.log(this.percent)
    $("."+index).fadeOut(100);
    if(index == "basic_info"){
      setTimeout(() => {
        $(".idnumber").show()
      }, 100);
    }
    if(index == "contact"){
      setTimeout(() => {
        $(".contact2").show()

      }, 100);
    }
    if(index == "idnumber"){
      setTimeout(() => {
        $(".disability").show()

      }, 100);
    }
    if(index == "disability"){
      setTimeout(() => {
        $(".cmrecord").show()

      }, 100);
    }
    if(index == "cmrecord"){
      setTimeout(() => {
        $(".dismiss").show()

      }, 100);
    }
    if(index == "dismiss"){
      setTimeout(() => {
        $(".basic_contact").show()

      }, 100);
    }
    if(index == "basic_contact"){
      setTimeout(() => {
        $(".preferred").show()

      }, 100);
    }
    if(index == "preferred"){
      setTimeout(() => {
        $(".physical").show()

      }, 100);
    }
    if(index == "physical"){
      if(!this.userData.profile.contact.physical.phySame){ //if the physical address is the same as postal address
        setTimeout(() => {
          $(".postal").show()
        }, 100);
      }
      else{
        setTimeout(() => {
          $(".matric").show()
        }, 100);
      }
    }
    if(index == "postal"){
      setTimeout(() => {
        $(".matric").show()

      }, 100);
    }
    if(index == "matric"){
      setTimeout(() => {
        $(".qualifications").show()

      }, 100);
    }
    if(index == "qualifications"){
      setTimeout(() => {
        $(".government").show()

      }, 100);
    }
    if(index == "government"){
      setTimeout(() => {
        $(".experience").show()

      }, 100);
    }
    if(index == "experience"){
      setTimeout(() => {
        $(".reference").show()

      }, 100);
    }
    if(index == "reference"){
      setTimeout(() => {
        $(".finish").show()

      }, 100);
    }
    if(index == "finish"){
      setTimeout(() => {
        $(".dashboard").show()

      }, 100);
    }
  }
  back(index : string){
    this.index = this.index - 1 //increasing the progress bar
    this.percent = (this.index / 16)*100;

    if(this.index < 0)
      this.index = 0;

    $("."+index).fadeOut(100);

    if(index == "idnumber"){
      setTimeout(() => {
        $(".basic_info").show()

      }, 100);
    }
    if(index == "disability"){
      setTimeout(() => {
        $(".idnumber").show()

      }, 100);
    }
    if(index == "cmrecord"){
      setTimeout(() => {
        $(".disability").show()

      }, 100);
    }
    if(index == "dismiss"){
      setTimeout(() => {
        $(".cmrecord").show()

      }, 100);
    }
    if(index == "basic_contact"){
      setTimeout(() => {
        $(".dismiss").show()

      }, 100);
    }
    if(index == "preferred"){
      setTimeout(() => {
        $(".basic_contact").show()

      }, 100);
    }
    if(index == "physical"){
      setTimeout(() => {
        $(".preferred").show()

      }, 100);
    }
    if(index == "postal"){
      setTimeout(() => {
        $(".physical").show()

      }, 100);
    }
    if(index == "matric"){
          if(!this.userData.profile.contact.physical.phySame){
            setTimeout(() => {
              $(".postal").show()

            }, 100);
          }
          else{
            setTimeout(() => {
              $(".physical").show()

            }, 100);
          }

    }
    if(index == "qualifications"){
      setTimeout(() => {
        $(".matric").show()

      }, 100);
    }
    if(index == "government"){
      setTimeout(() => {
        $(".qualifications").show()

      }, 100);
    }
    if(index == "experience"){
      setTimeout(() => {
        $(".government").show()

      }, 100);
    }
    if(index == "reference"){
      setTimeout(() => {
        $(".experience").show()

      }, 100);
    }
    if(index == "finish"){
      setTimeout(() => {
        $(".reference").show()

      }, 100);
    }
  }

}
