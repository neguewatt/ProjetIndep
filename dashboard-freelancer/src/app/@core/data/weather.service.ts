import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { WeatherData } from '../../pages/dashboard/weather/weather.model';
//api key : 5eeebeb9c22d1a037df14b807eafd362
@Injectable()
export class WeatherService {
	WeatherData: WeatherData[];
	private BaseUrl :string = "https://api.openweathermap.org/data/2.5/";

  	constructor(private http: HttpClient ) { }

  	recevezLeMeteo(ville): any {
   		return this.http.get( `${this.BaseUrl + 'weather?q='+ ville + '&appid=' + '5eeebeb9c22d1a037df14b807eafd362'}`);
/*   		.subscribe(reponse => {
   			reponse.json();
   			console.log(reponse._body);
   			return reponse._body;*/

/*   			.subscribe((data: WeatherData) => {
   				this.WeatherData = response._body;
   				console.log(this.WeatherData);
   		})*/
   	}
 }
