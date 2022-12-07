import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  count = 0;
  @Output() counter = new EventEmitter<{
    clicked: boolean;
  }>();
  onStart() {
    this.counter.emit({
      clicked: true,
    });
  }
  onStop() {
    this.counter.emit({
      clicked: false,
    });
  }

  // intervalId: any;
  // onStart() {
  //   this.intervalId = setInterval(() => {
  //     this.count = this.count + 1;
  //     return this.count;
  //   }, 1000);

  // }
  // onStop() {
  //   console.log('ssss');
  //   clearInterval(this.intervalId);
  // }

  /////

  // count = 0;

  // onStart() {
  //   setInterval(() => {
  //     this.count + 1;
  //   }, 1000);
  //   return this.count;
  // }
  // onStop() {
  //   clearInterval(this.count);
  // }
}
