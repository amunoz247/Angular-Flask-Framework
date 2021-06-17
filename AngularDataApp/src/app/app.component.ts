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

  headers = ["date","temperature","condition"]

  data : Data[] = [];

  ngOnInit()
  {
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
