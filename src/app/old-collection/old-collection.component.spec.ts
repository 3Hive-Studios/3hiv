import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCollectionComponent } from './old-collection.component';

describe('OldCollectionComponent', () => {
  let component: OldCollectionComponent;
  let fixture: ComponentFixture<OldCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
