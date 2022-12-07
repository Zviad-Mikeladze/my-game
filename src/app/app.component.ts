import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-game';
  count = 0;
  clickCount: any;
  intervalId: any;

  onPress(countdata: { clicked: boolean }) {
    this.clickCount = countdata.clicked;
    if (this.clickCount) {
      this.intervalId = setInterval(() => {
        this.count = this.count + 1;
        return this.count;
      }, 1000);
    }
    if (!this.clickCount) {
      clearInterval(this.intervalId);
    }
  }
}
