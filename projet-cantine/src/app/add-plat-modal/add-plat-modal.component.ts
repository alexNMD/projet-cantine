import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';
import { Plat } from '../plat';

@Component({
  selector: 'app-add-plat-modal',
  templateUrl: './add-plat-modal.component.html',
  styleUrls: ['./add-plat-modal.component.css']
})
export class AddPlatModalComponent implements OnInit {

/*  submitted = false;*/
  constructor(public activeModal: NgbActiveModal, public PlatService: PlatServicesService) { }
  @Output() change = new EventEmitter();
  @Input() invalidForm: boolean;
  ngOnInit() {
  }

    closeModal() {
        this.activeModal.close('Modal closed');
    }
    addPlat(newPlat) {
      if (
          newPlat.value.name === '' ||
          newPlat.value.price === '' ||
          newPlat.value.type_dish === '' ||
          newPlat.value.temp === '' ||
          newPlat.value.ingredients === '' ||
          newPlat.value.image === '' ||
          newPlat.value.date === ''
      ) {
        alert('Tous les champs doivent être remplis !');
      } else {
          this.PlatService.addPlat(newPlat.value);
          this.change.emit(newPlat.value);
          this.activeModal.close();
      }
    }
}
