import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthreeComponent } from './newthree.component';

describe('NewthreeComponent', () => {
  let component: NewthreeComponent;
  let fixture: ComponentFixture<NewthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
