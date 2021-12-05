import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShhhComponent } from './shhh.component';

describe('ShhhComponent', () => {
  let component: ShhhComponent;
  let fixture: ComponentFixture<ShhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShhhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
