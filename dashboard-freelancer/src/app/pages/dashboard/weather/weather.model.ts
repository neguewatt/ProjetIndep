
 export class WeatherData   {
  
  coord: 
  {
    lon: number,
    lat: number
  };
    weather:
	{
		id: number,
		main: string,
		description: string,
		icon: string
	};
  base: string;
  main: 
  {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number
  };
  visibility: number;
  wind: {
    speed: number,
    deg: number
  };
  clouds: {
    all: number
  };
  dt: number;
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  };
  id: number;
  name: string;
  cod: number;
  
}



/*    constructor(
      private temp: number,
      private temp_min: number,
      private temp_max: number
  ){}
 public get_temp(): number{
      return this.temp;
  }

  public get_temp_min() : number{
      return this.temp_min;
  }

  public get_temp_max() : number{
      return this.temp_max;
  }*/