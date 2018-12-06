import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteModalComponent } from '../compte-modal/compte-modal.component';
import { PanierModalComponent } from '../panier-modal/panier-modal.component';
import { RechargeModalComponent } from '../recharge-modal/recharge-modal.component';
import { HistoriqueModalComponent } from '../historique-modal/historique-modal.component';
import {ConnexionModalComponent} from '../connexion-modal/connexion-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '15em'
      })),
      state('closed', style({
        width: '4em'
      })),
      transition('open <=> closed', [
        animate('0.25s')
      ]),
    ]),
  ]
})
export class MenuComponent implements OnInit {
  sidenavWidth = 'closed';

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 'open';
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 'closed';
    console.log("decrease sidenav width");
  }

  openFormModalCompte() {
    const modalRef = this.modalService.open(CompteModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }
  openFormModalConnexion() {
    const modalRef = this.modalService.open(ConnexionModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }

  openFormModalPanier() {
    const modalRef = this.modalService.open(PanierModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalRecharge() {
    const modalRef = this.modalService.open(RechargeModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalHistorique() {
    const modalRef = this.modalService.open(HistoriqueModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
