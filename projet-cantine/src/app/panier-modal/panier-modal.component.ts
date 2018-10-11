import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panier-modal',
  templateUrl: './panier-modal.component.html',
  styleUrls: ['./panier-modal.component.css']
})
export class PanierModalComponent implements OnInit {

  user : string = "Julien";
  plat : string = "Spagetti";
  prix : number = 8.5;
  date;
  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit() {
    this.date = new Date();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }



}
