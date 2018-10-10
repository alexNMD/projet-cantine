import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  constructor() {
    setTimeout(
        () => {
          this.isAuth = true
        }, 2000
        );
  }
  toutAllumer() {
    console.log("On allume tout :");
  }
}
