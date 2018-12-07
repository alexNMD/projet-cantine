import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { Plat } from '../plat';

@Component({
  selector: 'app-plat-modal',
  templateUrl: './plat-modal.component.html',
  styleUrls: ['./plat-modal.component.css']
})
export class PlatModalComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() temp: string;
  @Input() type_dish: string;
  @Input() image: string;
  @Input() ingredients: Array<string>;
  @Input() date: Date;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.ingredients);
  }
  closeModal() {
        this.activeModal.close('Modal closed');
    }
}
