import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBannerComponent } from './item-banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('ItemBannerComponent', () => {
  let component: ItemBannerComponent;
  let fixture: ComponentFixture<ItemBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemBannerComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
