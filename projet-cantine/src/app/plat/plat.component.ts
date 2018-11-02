import {Component, Input, OnInit} from '@angular/core';
import {PlatModalComponent} from '../plat-modal/plat-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plat',
  template: `
      <li *ngFor="let plat of plats" class="list-group-item d-flex justify-content-between">
        <span>{{ plat }}</span>
        <div>
          <button type="button" class="btn btn-primary btn-sm mr-1" (click)="openFormModalPlat()"><i class="fas fa-info"></i></button>
          <button type="button" class="btn btn-success btn-sm" (click)="addFoodItem()"><i class="fas fa-plus"></i></button>
        </div>
      </li>
      `,
  /*templateUrl: './plat.component.html',*/
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() dishName: string;
  constructor(private modalService: NgbModal) { }
  plats = ['Burger', 'Pate', 'Tarte', 'Salade', 'Tomate', 'Pain au chocolat', 'Patate', 'Oignon'];
  ngOnInit() {
  }
    openFormModalPlat() {
        const modalRef = this.modalService.open(PlatModalComponent);

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });

    }

    addFoodItem() {
        //Déclencher alerte (staticAlertClosed = false)
    }
}
