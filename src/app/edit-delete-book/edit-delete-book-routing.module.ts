import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDeleteBookPage } from './edit-delete-book.page';

const routes: Routes = [
  {
    path: '',
    component: EditDeleteBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDeleteBookPageRoutingModule {}
