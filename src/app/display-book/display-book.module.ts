import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayBookPageRoutingModule } from './display-book-routing.module';

import { DisplayBookPage } from './display-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayBookPageRoutingModule
  ],
  declarations: [DisplayBookPage]
})
export class DisplayBookPageModule {}
