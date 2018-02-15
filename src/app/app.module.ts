import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LabCompComponent } from './lab-comp/lab-comp.component';
import { LabNameComponent } from './lab-name/lab-name.component';


@NgModule({
  declarations: [
    LabCompComponent,
    LabNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
      LabCompComponent
  ]
})
export class AppModule { }
