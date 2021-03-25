import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMonsComponent } from './old-mons.component';

describe('OldMonsComponent', () => {
  let component: OldMonsComponent;
  let fixture: ComponentFixture<OldMonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldMonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
