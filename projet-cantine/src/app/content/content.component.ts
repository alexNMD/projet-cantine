import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InfosModalComponent } from '../infos-modal/infos-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  date;
  private _clockSubscription;
  private _success = new Subject<string>();
  staticAlertClosed = true;

  constructor(private clockService: ClockService, private modalService: NgbModal) { }

  ngOnInit() {
    this._success.subscribe((message) => this.staticAlertClosed = false);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.staticAlertClosed = true);
    
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.setDate(time));
  }

  setDate(time) {
    this.date = time;
    if (this.date.getHours() < 10 && this.date.getMinutes() < 30) {
      $('#luciolle').addClass('text-success');
    } else {
      $('#luciolle').addClass('text-danger');
    }
  }
  
  openFormModalInfos() {
    const modalRef = this.modalService.open(InfosModalComponent);

    modalRef.result.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}
