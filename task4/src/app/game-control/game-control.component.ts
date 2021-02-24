import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('numberCreated') number = new EventEmitter<{currentNumber: number}>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartClick(): void{
    this.interval = setInterval(() => {
      this.number.emit({currentNumber: this.lastNumber});
      this.lastNumber++;
      console.log(this.lastNumber);
    }, 1000);
  }

  onStopClick(): void {
    clearInterval(this.interval);
  }

}
