import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../@core/data/weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit{
	ville: string;
	temp: number;
	temp_max: number;
	temp_min: number;
	WeatherDatas: WeatherData[];
	constructor(private weatherService: WeatherService) { }


	ngOnInit(){

		this.recevezLesDonnees('Bordeaux');
	}
	convertoCelsius(kelvin:number){
		let temp = kelvin - 272.15;
		return temp;
	}

	recevezLesDonnees(ville: string){
	  this.weatherService.recevezLeMeteo(ville)
	  	.subscribe((data: WeatherData[]) => {
	  		this.WeatherDatas = data;
	  		this.temp = (this.convertoCelsius(this.WeatherDatas.main.temp));
	  		this.temp_max = (this.convertoCelsius(this.WeatherDatas.main.temp_max));
	  		this.temp_min = (this.convertoCelsius(this.WeatherDatas.main.temp_min));
	  		console.log(this.WeatherDatas);
	  	});
  	}


  	
}

//&APPID=02bf5681ffafe7e89596c0d96c9f28b4&APPID=02bf5681ffafe7e89596c0d96c9f28b4