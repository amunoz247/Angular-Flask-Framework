export class Data
{
	day:string;
	temp:string;
	windspeed:string;
	event:string;

	constructor(day, temp, windspeed, event)
	{
		this.day = day;
		this.temp = temp;
		this.windspeed = windspeed;
		this.event = event;
	}
}
