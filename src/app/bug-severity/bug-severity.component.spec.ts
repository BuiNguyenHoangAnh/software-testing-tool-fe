import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugSeverityComponent } from './bug-severity.component';

describe('BugSeverityComponent', () => {
  let component: BugSeverityComponent;
  let fixture: ComponentFixture<BugSeverityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugSeverityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugSeverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
