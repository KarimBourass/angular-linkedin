import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserInfoComponent } from './home-user-info.component';

describe('HomeUserInfoComponent', () => {
  let component: HomeUserInfoComponent;
  let fixture: ComponentFixture<HomeUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
