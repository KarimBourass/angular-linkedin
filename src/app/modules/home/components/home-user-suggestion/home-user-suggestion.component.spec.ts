import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserSuggestionComponent } from './home-user-suggestion.component';

describe('HomeUserSuggestionComponent', () => {
  let component: HomeUserSuggestionComponent;
  let fixture: ComponentFixture<HomeUserSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
