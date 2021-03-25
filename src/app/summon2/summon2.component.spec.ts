import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summon2Component } from './summon2.component';

describe('Summon2Component', () => {
  let component: Summon2Component;
  let fixture: ComponentFixture<Summon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summon2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Summon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
