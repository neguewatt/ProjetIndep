import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-managoftime',
  templateUrl: './managoftime.component.html',
  styleUrls: ['./managoftime.component.scss']

})

export class ManagoftimeComponent implements OnInit {

	simulatorForm: FormGroup;

	dateNow: number = Date.now();
	firstday:number = Date.now();
	mardi: number = Date.now();
	mercredi:number = Date.now();
	jeudi:number = Date.now();
	lastday:number = Date.now();

	startTime = {hour: 8, minute: 0};
	endTime = {hour: 17, minute: 0};

	time = {hour: 13, minute: 30};    

	constructor(private fb: FormBuilder) {
		this.simulatorForm = fb.group({
			startTime: 8,
			endTime: 17
		});

  		var d = new Date();
		this.firstday = d.setUTCDate(d.getUTCDate()-d.getUTCDay()+1);
		this.mardi = d.setUTCDate(d.getUTCDate()-d.getUTCDay()+2);
		this.mercredi = d.setUTCDate(d.getUTCDate()-d.getUTCDay()+3);
		this.jeudi = d.setUTCDate(d.getUTCDate()-d.getUTCDay()+4);
		this.lastday = d.setUTCDate(d.getUTCDate()-d.getUTCDay()+5);


	}

	ngOnInit() {
	}

}
