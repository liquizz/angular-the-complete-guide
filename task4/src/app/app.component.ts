import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'task4';
  currentNumber: number;

  numberCreated(event: {currentNumber: number}): void {
    this.currentNumber = event.currentNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
