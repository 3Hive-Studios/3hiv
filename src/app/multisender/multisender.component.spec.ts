import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisenderComponent } from './multisender.component';

describe('MultisenderComponent', () => {
  let component: MultisenderComponent;
  let fixture: ComponentFixture<MultisenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultisenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
