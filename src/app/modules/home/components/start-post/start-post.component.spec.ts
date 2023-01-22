import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPostComponent } from './start-post.component';

describe('StartPostComponent', () => {
  let component: StartPostComponent;
  let fixture: ComponentFixture<StartPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
