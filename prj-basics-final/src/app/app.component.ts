import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLinkSelected: string;

  onLinkSelected(link): void {
    this.currentLinkSelected = link.link;
  }

}
