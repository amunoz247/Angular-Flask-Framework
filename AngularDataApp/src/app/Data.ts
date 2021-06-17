// Class declaration that processes and stores data obtained from backend
export class Data
{
	date:string;
	temperature:string;
	condition:string;

	constructor(date, temperature, condition)
	{
		this.date = date;
		this.temperature = temperature;
		this.condition = condition;
	}
}
