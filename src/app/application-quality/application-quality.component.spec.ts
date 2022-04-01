import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationQualityComponent } from './application-quality.component';

describe('ApplicationQualityComponent', () => {
  let component: ApplicationQualityComponent;
  let fixture: ComponentFixture<ApplicationQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
