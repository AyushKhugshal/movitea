import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
