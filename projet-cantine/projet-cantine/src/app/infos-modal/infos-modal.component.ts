import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infos-modal',
  templateUrl: './infos-modal.component.html',
  styleUrls: ['./infos-modal.component.css']
})
export class InfosModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
    closeModal() {
        this.activeModal.close('Modal Closed');
    }
}
