import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-plat-modal',
  templateUrl: './plat-modal.component.html',
  styleUrls: ['./plat-modal.component.css']
})
export class PlatModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

    closeModal() {
        this.activeModal.close('Modal closed');
    }
}
