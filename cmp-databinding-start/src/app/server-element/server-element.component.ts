import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface Element {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // .None Shadow dom is disabled for styles here
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input('srvElement') element: Element;
  @Input() name: string;
  @ViewChild('headingElement', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) { // Triggers on any change
    console.log('ngOnChanges triggered!');
    console.log(changes);
  }

  ngDoCheck() { // Triggers every time when Angular checks for changes
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() { // Is triggered when ng-content tag successfully imports data from parent component
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
