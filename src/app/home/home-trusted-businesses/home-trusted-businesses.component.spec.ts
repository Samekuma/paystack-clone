import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrustedBusinessesComponent } from './home-trusted-businesses.component';

describe('HomeTrustedBusinessesComponent', () => {
  let component: HomeTrustedBusinessesComponent;
  let fixture: ComponentFixture<HomeTrustedBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTrustedBusinessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTrustedBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
