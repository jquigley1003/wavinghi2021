import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MyMenuComponent } from "./my-menu.component";


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    MyMenuComponent
  ],
  exports: [
    MyMenuComponent
  ]
})
export class MyMenuModule { }