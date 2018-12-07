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
  @Input() plat: Plat;
  plats: Plat[];
  constructor(private modalService: NgbModal, private http: HttpClient, private PlatService: PlatServicesService) { }

  ngOnInit() {
      this.getPlat();
  }
    openFormModalPlat(plat) {
        const modalRef = this.modalService.open(PlatModalComponent);
        modalRef.componentInstance.name = plat.name;
        modalRef.componentInstance.price = plat.price;
        modalRef.componentInstance.temp = plat.temp;
        modalRef.componentInstance.type_dish = plat.type_dish;
        modalRef.componentInstance.image = plat.image;
        modalRef.componentInstance.ingredients = plat.ingredients;
        modalRef.componentInstance.date = plat.date;
    }

    addPlat() {
      this.modalService.open(AddPlatModalComponent);
    }
    updatePlatList() {
      this.plats.push(this.plat);
    }
    getPlat(): void {
      this.PlatService.getPlat()
          .subscribe(data => this.plats = Object.values(data));
    }
    addFoodItem() {
        //Déclencher alerte (staticAlertClosed = false)
    }
}
