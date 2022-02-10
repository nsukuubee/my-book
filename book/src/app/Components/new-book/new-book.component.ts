import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

   bookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });
  crudService: any;
   constructor (
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone){

      this.bookForm = this.formBuilder.group({
        title: [' '],
        author: [' '],
        description: [' '],
        image: [' ']
      });
    }
    ngOnInit(): void {
    }
    onSubmit(): any {
      this.crudService.newBook(this.bookForm.value)
      .subscribe(() => {
          console.log('successfully')
          this.ngZone.run(() => this.router.navigateByUrl('/allbooks'))
        }, (err: any) => {
          console.log(err);
      });
    }
  
  }
