import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() { }

  weatherUrl : string = "http://127.0.0.1:5000/dataReport/";

  readWeather() {
	return this.http.get<Data[]>(this.weatherUrl);
  }
}
