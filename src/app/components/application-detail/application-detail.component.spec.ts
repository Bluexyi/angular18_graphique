import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailComponent } from './application-detail.component';

describe('ApplicationDetailComponent', () => {
  let application: ApplicationDetailComponent;
  let fixture: ComponentFixture<ApplicationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDetailComponent);
    application = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(application).toBeTruthy();
  });
});
