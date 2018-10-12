import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compte-modal',
  templateUrl: './compte-modal.component.html',
  styleUrls: ['./compte-modal.component.css']
})
export class CompteModalComponent implements OnInit {

  user: string = "Julien";
  promo: string ="MCDNT-5";
  email: string = "julien.feger@gmail.com";
  regime: string = "Pas de fromage";
  cagnotte: number = 150;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
