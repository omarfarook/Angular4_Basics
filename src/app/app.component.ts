import { Component } from '@angular/core';
import { FormGroup, FormControl}  from '@angular/forms';
//import '../assets/certonaRec.js';


//declare function certonaResx():any;
declare var certonaResx: any;
//declare function notifyMe(): any;
declare function callCertona(): any;
declare function certonaRecommendations():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DICKS SPORTING GOODS!';
  //Input Driven start
  personalInfo = {
	  name : 'Suresh Kumar',
	  designation : 'Branch Manager',
	  place : 'Haryana',
	  age: 50
  };
//Input Driven End

//OutDriven Start
  public empDetails ;
  
 async ngOnInit(){
  // var certona = {
  //   pagetype : "HOME",
  //   devicetype : "DESKTOP",
  //    recommendations : true
  //   };
  // callCertona();
  //certonaRecommendations() = abcd;
   (<any>window).certona = {
    pagetype : "HOME",
    devicetype : "DESKTOP",
     recommendations : true
    };
    (<any>window).callCertona();
    (<any>window).certonaRecommendations = this.abcd
    
  //     certonaResx.callCertona();
  //  window.certonaResx;
  }
   abcd(response){
console.log("abcd",response.resonance.schemes[0])
   }
  getEmpDetails(event: object) {
    this.empDetails = event;
  }
  //Output DDriven End

  //Model Driven Start
  myForm : FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'fname' : new FormControl(),
      'lname' : new FormControl()
    });
   
  }

  save() {
	  console.log(this.myForm.value);
  }
}
