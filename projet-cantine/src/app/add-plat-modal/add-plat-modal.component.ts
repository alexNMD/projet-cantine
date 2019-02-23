import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() add = new EventEmitter();
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
          console.log(newPlat);
          newPlat.value.ingredients = newPlat.value.ingredients.split(';');
          this.PlatService.addPlat(newPlat.value)
              .subscribe(data => {
                  let plat: Object = {key: Object.values(data)[0], values: newPlat.value};
                  console.log(plat);
                  this.add.emit(plat);
                  this.activeModal.close();
              });
      }
    }
}
