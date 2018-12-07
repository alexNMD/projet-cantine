import { Injectable } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(
      map(tick => new Date()),
      share()
    );
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

}
