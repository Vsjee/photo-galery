import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagesDashboardComponent } from './upload-images-dashboard.component';

describe('UploadImagesDashboardComponent', () => {
  let component: UploadImagesDashboardComponent;
  let fixture: ComponentFixture<UploadImagesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImagesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadImagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
