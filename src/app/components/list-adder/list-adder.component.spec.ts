import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdderComponent } from './list-adder.component';

describe('ListAdderComponent', () => {
  let component: ListAdderComponent;
  let fixture: ComponentFixture<ListAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
