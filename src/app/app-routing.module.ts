import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-books',
    loadChildren: () => import('./list-books/list-books.module').then( m => m.ListBooksPageModule)
  },
  {
    path: 'display-book',
    loadChildren: () => import('./display-book/display-book.module').then( m => m.DisplayBookPageModule)
  },
  {
    path: 'edit-delete-book',
    loadChildren: () => import('./edit-delete-book/edit-delete-book.module').then( m => m.EditDeleteBookPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
