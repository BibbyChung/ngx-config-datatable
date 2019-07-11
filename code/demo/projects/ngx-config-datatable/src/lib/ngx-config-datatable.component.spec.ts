import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConfigDatatableComponent } from './ngx-config-datatable.component';

describe('NgxConfigDatatableComponent', () => {
  let component: NgxConfigDatatableComponent;
  let fixture: ComponentFixture<NgxConfigDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConfigDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConfigDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
