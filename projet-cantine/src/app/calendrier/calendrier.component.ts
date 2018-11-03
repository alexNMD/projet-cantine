import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
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
