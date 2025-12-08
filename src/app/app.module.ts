import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScrollRevealDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
        RouterModule.forRoot(routes)

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
