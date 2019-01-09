import { Passenger } from "../passenger-dashboard/models/passenger.interface";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }
}
