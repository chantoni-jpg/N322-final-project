import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDeleteBookPageRoutingModule } from './edit-delete-book-routing.module';

import { EditDeleteBookPage } from './edit-delete-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDeleteBookPageRoutingModule
  ],
  declarations: [EditDeleteBookPage]
})
export class EditDeleteBookPageModule {}
