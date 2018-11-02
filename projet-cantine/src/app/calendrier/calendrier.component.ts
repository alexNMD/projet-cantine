import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendrier',
  template: `
  <div *ngFor="let day of days">
        <ul class="list-group">
          <li class="text-center list-group-item li-title">
              {{ day }}
          </li>
          <app-plat></app-plat>
        </ul>
  </div>
      `,
  /*templateUrl: './calendrier.component.html',*/
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  @Input() dayName: string;
  constructor() { }
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  // Jours non ouvrés
  ngOnInit() {
  }
}
