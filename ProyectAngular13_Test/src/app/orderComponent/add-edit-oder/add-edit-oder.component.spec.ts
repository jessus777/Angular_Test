import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOderComponent } from './add-edit-oder.component';

describe('AddEditOderComponent', () => {
  let component: AddEditOderComponent;
  let fixture: ComponentFixture<AddEditOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
