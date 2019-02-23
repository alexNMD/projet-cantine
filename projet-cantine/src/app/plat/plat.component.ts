import { Component, Input, OnInit } from '@angular/core';
import { PlatModalComponent } from '../plat-modal/plat-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';
import { Plat } from '../plat';
import { AddPlatModalComponent } from '../add-plat-modal/add-plat-modal.component';
import { HttpClient } from '@angular/common/http';
import { EditPlatModalComponent } from '../edit-plat-modal/edit-plat-modal.component';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() dishName: string;
  @Input() plat: Plat;
  plats: any[] = [];
  constructor(private modalService: NgbModal, private http: HttpClient, private PlatService: PlatServicesService) { }

  ngOnInit() {
      this.getPlat();
  }
    openFormModalPlat(key) {
        const modalRef = this.modalService.open(PlatModalComponent);
        modalRef.componentInstance.key = key;
    }

    addPlat() {
      const modalRef = this.modalService.open(AddPlatModalComponent);
      modalRef.componentInstance.change.subscribe(plat => this.savePlat(plat));
    }
    savePlat(plat) {
        this.plats.push(plat);
    }
    editPlat(key) {
      const modalRef = this.modalService.open(EditPlatModalComponent);
        modalRef.componentInstance.key = key;
    }
    deletePlat(key) {
        this.PlatService.deletePlat(key).subscribe();
        this.plats = this.plats.filter(plat => plat.key !== key);
    }
    getPlat(): void {
      this.PlatService.getPlat()
          .subscribe(data => {
              let cle = Object.keys(data);
              let donnees = Object.values(data);
              for (let i = 0; i < cle.length; i++) {
                  this.plats.push({key: cle[i], values:donnees[i]});
              }
          });
    }
    addFoodItem() {
        //Déclencher alerte (staticAlertClosed = false)
    }
}
