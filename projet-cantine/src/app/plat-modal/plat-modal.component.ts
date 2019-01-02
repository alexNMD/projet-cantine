import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatServicesService } from '../services/plat-services.service';

@Component({
  selector: 'app-plat-modal',
  templateUrl: './plat-modal.component.html',
  styleUrls: ['./plat-modal.component.css']
})
export class PlatModalComponent implements OnInit {
  @Input() key: string;
  plat: Object;
  constructor(public activeModal: NgbActiveModal, private PlatService: PlatServicesService) { }

  ngOnInit() {
    this.getBeerByKey(this.key);
  }
  getBeerByKey(key) {
        this.PlatService.getPlatByKey(key)
            .subscribe(data => {
                this.plat = data;
            });
  }
  closeModal() {
        this.activeModal.close('Modal closed');
  }
}
