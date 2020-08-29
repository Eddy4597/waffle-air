import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseURL = 'http://api-cache.waffleair.com/current/flightlogs.json';

const headers = new HttpHeaders()
      .append('Content-Type', '*')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseURL}`, { headers: headers });
  }
}
