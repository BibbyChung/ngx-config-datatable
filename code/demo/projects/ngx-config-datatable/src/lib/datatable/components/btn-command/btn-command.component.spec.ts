import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCommandComponent } from './btn-command.component';

describe('BtnCommandComponent', () => {
  let component: BtnCommandComponent;
  let fixture: ComponentFixture<BtnCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
