import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOderComponent } from './show-oder.component';

describe('ShowOderComponent', () => {
  let component: ShowOderComponent;
  let fixture: ComponentFixture<ShowOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
