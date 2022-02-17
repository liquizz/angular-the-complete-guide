import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyledBackgroundDirective } from './styled-background.directive';
import { StyledBackgroundHostlistenerDirective } from './styled-background-hostlistener.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyledBackgroundDirective,
    StyledBackgroundHostlistenerDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
