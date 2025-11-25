import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollRevealDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
