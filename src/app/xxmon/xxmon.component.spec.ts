import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxmonComponent } from './xxmon.component';

describe('XxmonComponent', () => {
  let component: XxmonComponent;
  let fixture: ComponentFixture<XxmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxmonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
