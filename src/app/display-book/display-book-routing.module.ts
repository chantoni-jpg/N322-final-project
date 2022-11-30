import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayBookPage } from './display-book.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayBookPageRoutingModule {}
