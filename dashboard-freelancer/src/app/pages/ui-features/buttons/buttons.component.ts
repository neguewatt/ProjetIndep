import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from  '@angular/forms';


@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
	form: FormGroup;
	orders = [
		{id: 1, name: 'SASU'},
		{id: 1, name: 'SASU'},
		{id: 1, name: 'SASU'},
		{id: 1, name: 'SASU'}
	];

	constructor(private formBuilder: FormBuilder){
		this.form = this.formBuilder.group({
			orders: []
		});	
	}
	submit(){
		console.log(this.form.value);
	}

}
