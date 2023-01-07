import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEntryComponent } from './private-entry.component';

describe('PrivateEntryComponent', () => {
  let component: PrivateEntryComponent;
  let fixture: ComponentFixture<PrivateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
