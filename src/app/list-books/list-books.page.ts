import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Book } from '../services/Book';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.page.html',
  styleUrls: ['./list-books.page.scss'],
})
export class ListBooksPage implements OnInit {
  books: Observable<Book[]> = this.firestoreService.getBooks();
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {}
}
