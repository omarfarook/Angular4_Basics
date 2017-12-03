import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-one',
  templateUrl: './model-driven-one.component.html',
  styleUrls: ['./model-driven-one.component.css']
})
export class ModelDrivenOneComponent implements OnInit {

  modelDriven: FormGroup;
  constructor() {
	  this.modelDriven = new FormGroup({
		  'company_name': new FormControl('',[<any>Validators.required,<any>Validators.minLength(5),Validators.maxLength(8)]),
			'employee' : new FormGroup({
				 'designation': new FormControl('',Validators.required),
				 'password': new FormControl('',Validators.required),
			})
	  });
	 }

  ngOnInit() {
  }
 getInfo() {
	 console.log(this.modelDriven.value);
 }

}
