import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSortComponent } from './btn-sort.component';

describe('BtnSortComponent', () => {
  let component: BtnSortComponent;
  let fixture: ComponentFixture<BtnSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
