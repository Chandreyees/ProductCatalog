import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductresultComponent } from './productresult.component';

describe('ProductresultComponent', () => {
  let component: ProductresultComponent;
  let fixture: ComponentFixture<ProductresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
