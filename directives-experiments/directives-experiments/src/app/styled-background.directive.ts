import {Directive, ElementRef, OnInit, Renderer2, RendererStyleFlags2} from '@angular/core';

@Directive({
  selector: '[appStyledBackground]'
})
export class StyledBackgroundDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef, 'background-color', 'azure', RendererStyleFlags2.Important);
  }

}
