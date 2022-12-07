import { Injectable } from '@angular/core';

import {
  addDoc,
  collection,
  Firestore,
  collectionData,
  docData,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Book } from '../services/Book';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  addBook(book: Book) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<Book[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Book[]>;
  }

  bookDetails(id: string): Observable<Book> {
    const booksRef = doc(this.firestore, `books/${id}`);
    return docData(booksRef, {
      idField: 'id',
    }) as Observable<Book>;
  }
  deleteBook(bookID: string): Promise<void> {
    const booksRef = doc(this.firestore, `books/${bookID}`);

    return deleteDoc(booksRef);
  }
  updateBook(book: Book) {
    const booksRef = doc(this.firestore, `books/${book.id}`);
    return updateDoc(booksRef, {
      title: book.title,
      fname: book.fname,
      lname: book.lname,
      date: book.date,
    });
  }
}
