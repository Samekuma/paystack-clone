import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupportedBrandedComponent } from './home-supported-branded.component';

describe('HomeSupportedBrandedComponent', () => {
  let component: HomeSupportedBrandedComponent;
  let fixture: ComponentFixture<HomeSupportedBrandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSupportedBrandedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSupportedBrandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
