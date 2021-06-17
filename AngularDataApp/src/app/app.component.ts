import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataApp';

  constructor(private rs : RestService){}

  // Headers for Data Table
  headers = ["date","temperature","condition"]

  // Data array that contains weather variables
  data : Data[] = [];

  ngOnInit()
  {
    // Rest Service function call to output data to the webpage
    this.rs.readWeather()
    .subscribe((response) => {
         this.data = response[0]["data"];
      },
      (error) => {
         console.log("No Data Found" + error);
      }
    )
  }
}
