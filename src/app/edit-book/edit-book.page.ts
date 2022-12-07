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
  book: Book = null;
  editBookForm: FormGroup;
  id: string;
  constructor(
    private readonly loadingCtrl: LoadingController,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    public formbuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.firestoreService.bookDetails(this.id).subscribe((res) => {
      this.editBookForm.setValue(res);
    });
    console.log(this.id);
  }

  ngOnInit() {
    this.editBookForm = this.formbuilder.group({
      title: [''],
      fname: [''],
      lname: [''],
      date: [''],
    });
  }
  async editBookFormData() {
    const loading = await this.loadingCtrl.create();

    const title = this.editBookForm.value.title;
    const fname = this.editBookForm.value.fname;
    const lname = this.editBookForm.value.lname;
    const date = this.editBookForm.value.date;
    const book = { title, fname, lname, date };
    this.firestoreService
      .updateBook(book, this.id)
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
