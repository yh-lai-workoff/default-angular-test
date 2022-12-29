import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletestComponent } from './profiletest.component';

describe('ProfiletestComponent', () => {
  let component: ProfiletestComponent;
  let fixture: ComponentFixture<ProfiletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiletestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
