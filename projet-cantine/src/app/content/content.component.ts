import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      console.log("Test");
  });

  };

}
