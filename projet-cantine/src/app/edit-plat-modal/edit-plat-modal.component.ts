import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';

@Component({
  selector: 'app-edit-plat-modal',
  templateUrl: './edit-plat-modal.component.html',
  styleUrls: ['./edit-plat-modal.component.css']
})
export class EditPlatModalComponent implements OnInit {

  @Input() key: string;
  plat: Object;
  constructor(private activeModal: NgbActiveModal, private PlatService: PlatServicesService) { }
  @Output() edit = new EventEmitter();

  ngOnInit() {
    this.getPlatByKey(this.key);
  }
  closeModal() {
        this.activeModal.close();
  }
  getPlatByKey(key) {
    this.PlatService.getPlatByKey(key)
        .subscribe(data => {
        this.plat = data;
        this.plat.ingredients = this.plat.ingredients.toString().replace(/,/g, ';');
    });
  }
  editPlat(updatedPlat) {
      if (
          updatedPlat.value.name === '' ||
          updatedPlat.value.price === '' ||
          updatedPlat.value.type_dish === '' ||
          updatedPlat.value.temp === '' ||
          updatedPlat.value.ingredients === '' ||
          updatedPlat.value.image === '' ||
          updatedPlat.value.image === '' ||
          updatedPlat.value.date === ''
      ) {
          alert('Tous les champs doivent être remplis !');
      } else {
            updatedPlat.value.ingredients = updatedPlat.value.ingredients.split(';');
            this.PlatService.editPlat(updatedPlat.form.value, this.key)
                .subscribe(data => {
                    this.edit.emit(updatedPlat.form.value);
                    this.activeModal.close();
                });
        }
  }
}