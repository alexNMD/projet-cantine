import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.css']
})
export class ConnexionModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
    closeModal() {
        this.activeModal.close('Modal Closed');
    }
}
