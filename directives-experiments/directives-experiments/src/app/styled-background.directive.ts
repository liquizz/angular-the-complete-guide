import {Directive, ElementRef, HostListener, OnInit, Renderer2, RendererStyleFlags2} from '@angular/core';

@Directive({
  selector: '[appStyledBackground]'
})
export class StyledBackgroundDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef, 'background-color', 'azure', RendererStyleFlags2.Important);
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'azure', RendererStyleFlags2.Important);
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.Important);
  }
}
