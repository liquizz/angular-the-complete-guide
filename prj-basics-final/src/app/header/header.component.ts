import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() chosenLink = new EventEmitter<{link: string}>();
  @ViewChild('recipeElement', {static: true}) recipeElement: ElementRef;
  @ViewChild('shoppingListElement', {static: true}) shoppingListElement: ElementRef;

  constructor() {
  }

  onLinkClick(link: string): void {
    if (link === 'shopping-list') {
      this.chosenLink.emit({link: this.shoppingListElement.nativeElement.textContent});
    } else {
      this.chosenLink.emit({link: this.recipeElement.nativeElement.textContent});
    }
  }

}
