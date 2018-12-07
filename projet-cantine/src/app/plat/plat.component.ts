import { Component, Input, OnInit } from '@angular/core';
import { PlatModalComponent } from '../plat-modal/plat-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';
import { Plat } from '../plat';
import { AddPlatModalComponent } from '../add-plat-modal/add-plat-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() dishName: string;
  plats: Plat[];
  constructor(private modalService: NgbModal, private http: HttpClient, private PlatService: PlatServicesService) { }
/*
  plats = ['Burger', 'Pate', 'Tarte', 'Salade', 'Tomate', 'Pain au chocolat', 'Patate', 'Oignon'];
*/

  ngOnInit() {
      this.getPlat();
  }
    openFormModalPlat(plat) {
        const modalRef = this.modalService.open(PlatModalComponent);
        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });

    }

    addPlat() {
      this.modalService.open(AddPlatModalComponent);
    }
    getPlat():void {
      this.PlatService.getPlat()
          .subscribe(data => this.plats = Object.values(data));
    }
    addFoodItem() {
        //Déclencher alerte (staticAlertClosed = false)
    }
}
