import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentLocalInput', {static: true}) serverContentInput: ElementRef;
  // Local references && child components can be viewed as such

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameLocalInput) {
    this.serverCreated.emit({
      name: serverNameLocalInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameLocalInput) {
    this.blueprintCreated.emit({
      name: serverNameLocalInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
