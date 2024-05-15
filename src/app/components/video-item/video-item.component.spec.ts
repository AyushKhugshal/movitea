import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemComponent } from './video-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('VideoItemComponent', () => {
  let component: VideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoItemComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
