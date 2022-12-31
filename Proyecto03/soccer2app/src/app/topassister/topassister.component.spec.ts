import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopassisterComponent } from './topassister.component';

describe('TopassisterComponent', () => {
  let component: TopassisterComponent;
  let fixture: ComponentFixture<TopassisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopassisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopassisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
