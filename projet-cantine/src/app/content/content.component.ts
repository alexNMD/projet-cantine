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

  constructor() { }
  
  private _success = new Subject<string>();
  staticAlertClosed = true;

  ngOnInit() {
    this._success.subscribe((message) => this.staticAlertClosed = false);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.staticAlertClosed = true);
  }

}
