import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyledBackgroundDirective } from './styled-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyledBackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
