import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') f: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'basic';

  title = 'template-driven-forms-task';

  onSubmit(): void {
    console.log(this.f.value);
  }
}
