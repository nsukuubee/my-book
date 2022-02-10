import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './Components/new-book/new-book.component';
import { AllBooksComponent } from './Components/all-books/all-books.component';
import { BookInforComponent } from './Components/book-infor/book-infor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all-books' },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'edit-book/:id', component: BookInforComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
