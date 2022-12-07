import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  createBookForm: FormGroup;
  booksRef: any;

  constructor(
    private readonly loadingCtrl: LoadingController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.booksRef = (this.firestoreService, 'books');
    this.createBookForm = formBuilder.group({
      title: [''],
      fname: [''],
      lname: [''],
      date: [''],
    });
  }
  async createNewBook() {
    const loading = await this.loadingCtrl.create();

    const title = this.createBookForm.value.title;
    const fname = this.createBookForm.value.fname;
    const lname = this.createBookForm.value.lname;
    const date = this.createBookForm.value.date;
    const book = { title, fname, lname, date };
    this.firestoreService
      .addBook(book)
      .then((res) => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('/list-books');
        });
      })
      .catch((error) => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      });
    return await loading.present();
  }
}
