import {Component, Input, OnInit} from '@angular/core';
import { PlatServicesService } from '../services/plat-services.service';
import { Plat } from '../plat';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  data: Plat[];
  dataToDisplay : Plat[];

  currentDate : Date = new Date();

  nextDate : Date = new Date(this.currentDate);
  nextNextDate : Date = new Date(this.currentDate);
  previousDate : Date = new Date(this.currentDate);
  previousPreviousDate : Date = new Date(this.currentDate);

  constructor(private platService: PlatServicesService) { }

  days = [this.previousPreviousDate, this.previousDate, this.currentDate, this.nextDate, this.nextNextDate];

  ngOnInit() {
    this.getPlats();

    this.nextDate.setDate(this.currentDate.getDate() + 1);
    this.nextNextDate.setDate(this.currentDate.getDate() + 2);
    this.previousDate.setDate(this.currentDate.getDate() - 1);
    this.previousPreviousDate.setDate(this.currentDate.getDate() - 2);
      
  }
    
  formatDate(date){
      var dd = date.getDate() < 10 ? "0" + this.currentDate.getDate() : this.currentDate.getDate();
      var mm = date.getMonth() < 10 ? "0" + this.currentDate.getMonth() + 1 : this.currentDate.getMonth() +1 ;
      var yyyy = date.getFullYear();
      return date = yyyy + '-' + mm + '-' + dd;
  }

  displayPlats(date){
    console.log(date)
    console.log(typeof(this.data[0].date))
    // this.dataToDisplay = this.data.filter(plat => plat.date == this.formatDate(date) )
    console.log(this.dataToDisplay);
  }

  getPlats():void {
    this.platService.getPlat()
        .subscribe(data => this.data = Object.values(data));
  }
}
