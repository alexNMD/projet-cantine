import {Component, Input, OnInit} from '@angular/core';
import {PlatModalComponent} from '../plat-modal/plat-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() dishName: string;
  constructor(private modalService: NgbModal) { }

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
