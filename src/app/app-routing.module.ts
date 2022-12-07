import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'list-books',
    loadChildren: () =>
      import('./list-books/list-books.module').then(
        (m) => m.ListBooksPageModule
      ),
  },
  {
    path: 'edit-book/:id',
    loadChildren: () =>
      import('./edit-book/edit-book.module').then((m) => m.EditBookPageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
