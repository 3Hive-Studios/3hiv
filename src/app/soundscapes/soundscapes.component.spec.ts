import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundscapesComponent } from './soundscapes.component';

describe('SoundscapesComponent', () => {
  let component: SoundscapesComponent;
  let fixture: ComponentFixture<SoundscapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundscapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
