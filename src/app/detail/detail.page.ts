import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Book } from '../services/Book';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
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
    const bookID: string = this.route.snapshot.paramMap.get('id');
    this.firestoreService.bookDetails(bookID).subscribe((book) => {
      this.book = book;
    });
    console.log(bookID);
  }
  ngOnInit() {}
  async editPageClick() {
    this.router.navigateByUrl('/edit-book:id');
  }
  async deleteBook(id: string) {
    this.firestoreService.deleteBook(id).then(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
