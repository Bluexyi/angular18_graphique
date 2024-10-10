import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListComponent } from './application-list.component';

describe('ApplicationListComponent', () => {
  let application: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationListComponent);
    application = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(application).toBeTruthy();
  });
});
