import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInforComponent } from './book-infor.component';

describe('BookInforComponent', () => {
  let component: BookInforComponent;
  let fixture: ComponentFixture<BookInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
