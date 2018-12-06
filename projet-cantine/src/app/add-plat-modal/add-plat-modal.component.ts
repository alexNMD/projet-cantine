import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';
import { Plat } from '../plat';

@Component({
  selector: 'app-add-plat-modal',
  templateUrl: './add-plat-modal.component.html',
  styleUrls: ['./add-plat-modal.component.css']
})
export class AddPlatModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public PlatService: PlatServicesService) { }

  ngOnInit() {
  }

    closeModal() {
        this.activeModal.close('Modal closed');
    }
    addPlat(newPlat) {
      this.PlatService.addPlat(newPlat.value);
    }
}
