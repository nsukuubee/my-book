import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-book-infor',
  templateUrl: './book-infor.component.html',
  styleUrls: ['./book-infor.component.scss']
})
export class BookInforComponent implements OnInit {


getId: any;
  updateForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });
  UploadForm: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService) {

      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.GetBook(this.getId).subscribe(res => {
        this.updateForm.setValue({
          title: res['title'],
          author: res['author'],
          description: res['description'],
          image: res['image']
        });
      });
     }

  showPreview(event: { target: HTMLInputElement; }) {
    //const file = (event.target as HTMLInputElement).files[0];
    this.UploadForm.patchValue({
      image: File
    })

     this.updateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
      image: ['']
    });
  }
    ngOnInit(): void {
    }
    onUpdate(): any {
      this.crudService.updateBook(this.getId, this.updateForm.value)
      .subscribe(() => {
          console.log('Data updated successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
        }, (err) => {
          console.log(err);
      });
    }
}

