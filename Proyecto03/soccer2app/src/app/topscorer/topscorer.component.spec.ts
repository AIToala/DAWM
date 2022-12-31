import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopscorerComponent } from './topscorer.component';

describe('TopscorerComponent', () => {
  let component: TopscorerComponent;
  let fixture: ComponentFixture<TopscorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopscorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopscorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
