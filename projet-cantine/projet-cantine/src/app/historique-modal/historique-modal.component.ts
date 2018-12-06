import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historique-modal',
  templateUrl: './historique-modal.component.html',
  styleUrls: ['./historique-modal.component.css']
})
export class HistoriqueModalComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
