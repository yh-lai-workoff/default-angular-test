import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfourComponent } from './newfour.component';

describe('NewfourComponent', () => {
  let component: NewfourComponent;
  let fixture: ComponentFixture<NewfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
