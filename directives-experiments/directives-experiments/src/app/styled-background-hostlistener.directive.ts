import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appStyledBackgroundHostlistener]'
})
export class StyledBackgroundHostlistenerDirective implements OnInit {
  @Input('appStyledBackgroundHostlistener') backgroundInputColor = 'azure';
  @Input() transparentInputColor = 'transparent';

  @HostBinding('style.backgroundColor') backgroundColor;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.transparentInputColor;
  }
  @HostListener('mouseenter') onMouseEnter(ev: Event): void {
    this.backgroundColor = this.backgroundInputColor;
  }

  @HostListener('mouseleave') onMouseLeave(ev: Event): void {
    this.backgroundColor = this.transparentInputColor;
  }
}
