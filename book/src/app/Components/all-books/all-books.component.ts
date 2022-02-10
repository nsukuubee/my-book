import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  Books:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });
  }
  delete(id:string, num:number) {
    console.log(id);
    if(window.confirm('are you sure that you want to delete infor?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(num, 1);
      })
    }
  }
}