import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compte-modal',
  templateUrl: './compte-modal.component.html',
  styleUrls: ['./compte-modal.component.css']
})
export class CompteModalComponent implements OnInit {

  user: string = "Julien";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
