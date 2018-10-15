import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindABabyComponent } from './find-a-baby.component';

describe('FindABabyComponent', () => {
  let component: FindABabyComponent;
  let fixture: ComponentFixture<FindABabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindABabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindABabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
