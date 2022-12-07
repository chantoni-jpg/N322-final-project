import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Book } from '../services/Book';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit {
  book: Book;
  editBookForm: FormGroup;
  id: string;
  constructor(
    private readonly loadingCtrl: LoadingController,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    public formbuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.firestoreService.bookDetails(this.id).subscribe((res) => {
      this.book = res;
    });
    this.editBookForm = this.formbuilder.group({
      title: [''],
      fname: [''],
      lname: [''],
      date: [''],
    });
  }
  async editBookFormData() {
    const loading = await this.loadingCtrl.create();
    this.firestoreService
      .updateBook(this.book)
      .then(() => {
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
