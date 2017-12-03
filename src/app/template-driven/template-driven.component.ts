import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  public forms;
  public person ;
  ngOnInit() {
	 this.person = {
	  name: "Jyothi",
	  Password : "",
	  Gender : ""
 
  }; 
  }
  
  submitForm(value) {
	  this.forms = value;
  } 
}
