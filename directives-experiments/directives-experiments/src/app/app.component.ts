import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-experiments';
  dataArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  value = 0;

  onClick(value: number): void {
    this.value += value;
  }
}
