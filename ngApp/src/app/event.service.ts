import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventsUrl = "/api/events";
  private _specialeventsUrl = "/api/special"
  constructor(private http : HttpClient) { }

getEvents(){
  return this.http.get<any>(this._eventsUrl);
}

getSpecialEvents(){
  return this.http.get<any>(this._specialeventsUrl);
}

}
