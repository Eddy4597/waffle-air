import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  json: any;
  items: any;
  sortBy = 1;
  constructor(private flightsService: FlightsService) { }  
  
  ngOnInit() {
    this.retrieveFlights();
  }

  retrieveFlights() {
    this.flightsService.getAll()
        .subscribe((data) => {
            //console.log(JSON.stringify(data));
            this.json = data;
            this.items = this.json.data;
            //console.log(this.items);
          },
          error => {
            console.log(error);
          }
      );
  }

}
