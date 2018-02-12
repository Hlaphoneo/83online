import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {
  workExp = {
    employer : "",
    position : "",
    totalExp  : ""
  }
  qualifications = {
    name         : "",
    yearObtained : "",
    institution   : ""
  }
  reference = {
    name   : "",
    phone  : ""
  }
  profile = {
    about :{
      firstName:"",
      lastName:"",
      race:"",
      id:"",
      gender:"",
      disability:"",
      criminalRecord:"",
      citizen:"",
      workPermit:"",
      dismissed:""
    },
    contact:{
      phone     :"",
      home      :"",
      fax       :"",
      preferred :"",
      physical  :{
                  line1     :"",
                  line2     :"",
                  city      :"",
                  province  :"",
                  zipCode   :"",
                  phySame   :""
                },
      postal  :{
                  line1     :"",
                  line2     :"",
                  city      :"",
                  province  :"",
                  zipCode   :""
                }
    },
    education:{
      matric:"",
      qualif : false,
      qualifications : []
    },
    workExp: {
      question1: "",
      question2: "",
      hasExperience : false,
      experience :[]
    },
    references: {
      list :[]
    },
    declaration : ""
  }

  constructor() { }

  addReference(){

    if(!this.reference.name)
      return "Please enter your educational institution";
    if(!this.reference.phone)
      return "Please enter the year your obtained your qualification";

    this.profile.references.list.push({
          phone            :this.reference.phone,
          name             :this.reference.name
        })
  }
  addQualification(){

    if(!this.qualifications.institution)
      return "Please enter your educational institution";
    if(!this.qualifications.yearObtained)
      return "Please enter the year your obtained your qualification";
    if(!this.qualifications.name)
      return "Please enter qualification";


    this.profile.education.qualifications.push({
            name            :this.qualifications.name,
            yearObtained    :this.qualifications.yearObtained,
            institution      :this.qualifications.institution
            })
  }
  addWorkExperience(){

    if(!this.workExp.employer)
      return "Please enter your educational institution";
    if(!this.workExp.position)
      return "Please enter the year your obtained your qualification";
    if(!this.workExp.totalExp)
      return "Please enter qualification";

    this.profile.workExp.experience.push({
            employer       :this.workExp.employer,
            position       :this.workExp.position,
            totalYears     :this.workExp.totalExp
            })
  }
  isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
  }
  validate(level : string , stage : string){
      console.log("validation started")
      console.log(stage)
      console.log(this.profile)
      switch (stage) {
        case "basic_info":
            if(this.profile.about.firstName.length < 2)
                return "Name too short";
            if(this.profile.about.lastName == "")
                return "Please enter your last name";
            if(this.profile.about.race == ""){
                return "Please enter your race"
            }
            return true;

          break;
        case "idnumber":

          //checking gender
          if(this.profile.about.gender == "")
            return "Please select gender"

          //checking id number
          let idNumber = this.profile.about.id;
          if (idNumber.length < 4 || idNumber.length > 30 || !this.isNumber(idNumber)) {
            return 'ID/Passport number invalid';
          }

          return true;

          break;
        case "disability":
              if(this.profile.about.disability == "")
                return "Please indicate if you have a disability.";
              return true;
          break;
        case "cmrecord":
              if(this.profile.about.criminalRecord == "")
                return "Please indicate if you have a criminal record.";
              if(this.profile.about.citizen == "")
                return "Please indicate if you are a South African citizen.";
              if(this.profile.about.workPermit == "")
                return "Please indicate if you have a work permit.";
              return true;
          break;
        case "dismiss":
              if(this.profile.about.dismissed == "")
                return "Please indicate if you have been dismissed at least one from a job.";
              return true;
          break;
        case "basic_contact":
              if(this.profile.contact.phone == "" || this.profile.contact.home == "" || this.profile.contact.fax == "")
                  return "Please fill all the fields.";
              return true;
          break;
        case "preferred":
              if(this.profile.contact.preferred == "")
                  return "Please select a preferred method of communication."
              return true;
          break;
        case "physical":
              if(this.profile.contact.physical.line1 == "")
                  return "Please enter address 1.";
              if(this.profile.contact.physical.line2 == "")
                  return "Please enter address 2.";
              if(this.profile.contact.physical.city == "")
                  return "Please enter your city.";
              if(this.profile.contact.physical.province == "")
                  return "Please enter your province.";
              if(this.profile.contact.physical.zipCode == "")
                  return "Please enter your zip code.";
              return true;
          break;
        case "postal":
              if(this.profile.contact.postal.line1 == "")
                  return "Please enter address 1.";
              if(this.profile.contact.postal.line2 == "")
                  return "Please enter address 2.";
              if(this.profile.contact.postal.city == "")
                  return "Please enter your city.";
              if(this.profile.contact.postal.provicne == "")
                  return "Please enter your province.";
              if(this.profile.contact.postal.zipCode == "")
                  return "Please enter your zip code.";
              return true;
          break;
        case "matric":
            if(this.profile.education.matric == "")
                  return "Please indicate if you completed your matric.";
            return true;
          break;
        case "qualifications":
              if(this.profile.education.qualifications.length == 0)
                return "Please add least one qualification ";
              return true;
          break;
        case "government":
            if(this.profile.workExp.question1 == "")
                  return "Please indicate if you currently holding a government position";
            if(this.profile.workExp.question2 == "")
                  return "Please indicate if you are currently available for employment.";
              return true;
          break;
        case "experience":
            if(this.profile.workExp.experience.length == 0)
              return "Please add least one ";
            return true;
          break;
        case "reference":
            if(this.profile.references.list.length == 0)
              return "Please add at least one reference ";
            return true;
          break;
        case "finish":
        console.log(this.profile)
            if(this.profile.declaration == "")
              return "Please accept the declaration to continue";
            return true;
          break;

        default:

      }
  }
}
