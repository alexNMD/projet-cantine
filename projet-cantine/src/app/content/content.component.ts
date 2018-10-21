import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  date;
  constructor() { }
  private _success = new Subject<string>();
  staticAlertClosed = true;

  ngOnInit() {
    this._success.subscribe((message) => this.staticAlertClosed = false);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.staticAlertClosed = true);

    this.date = new Date();
    if (this.date.getHours() < 10 && this.date.getMinutes() < 30) {
        $('#luciolle').addClass('text-success');
      } else {
        $('#luciolle').addClass('text-danger');
      }
    }
  }

}
