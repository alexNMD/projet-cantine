import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteModalComponent } from '../compte-modal/compte-modal.component'
import { PanierModalComponent } from '../panier-modal/panier-modal.component'

import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    $('#sidebar').on('mouseenter', function () {
      $('#sidebar').toggleClass('active');
    });

    $('#sidebar').on('mouseleave', function () {
      $('#sidebar').toggleClass('active');
    });
  }


  openFormModalCompte() {
    const modalRef = this.modalService.open(CompteModalComponent);

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
  }
