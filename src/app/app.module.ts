import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ColHeaderDirective } from './directives/col-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ColHeaderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
