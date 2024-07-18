import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGlobalBrandComponent } from './home-global-brand.component';

describe('HomeGlobalBrandComponent', () => {
  let component: HomeGlobalBrandComponent;
  let fixture: ComponentFixture<HomeGlobalBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGlobalBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGlobalBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
