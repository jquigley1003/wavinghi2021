import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { MyMenuModule } from '../shared/components/my-menu/my-menu.module';
import { ContactFormModule } from '../shared/components/contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    MyMenuModule,
    ContactFormModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
