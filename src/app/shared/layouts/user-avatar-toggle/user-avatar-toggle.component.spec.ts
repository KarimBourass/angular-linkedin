import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarToggleComponent } from './user-avatar-toggle.component';

describe('UserAvatarToggleComponent', () => {
  let component: UserAvatarToggleComponent;
  let fixture: ComponentFixture<UserAvatarToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatarToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAvatarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
