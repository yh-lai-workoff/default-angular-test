import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymodComponent } from './lazymod.component';

describe('LazymodComponent', () => {
  let component: LazymodComponent;
  let fixture: ComponentFixture<LazymodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazymodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazymodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
