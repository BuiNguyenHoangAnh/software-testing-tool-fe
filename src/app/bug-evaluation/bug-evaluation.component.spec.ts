import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugEvaluationComponent } from './bug-evaluation.component';

describe('BugEvaluationComponent', () => {
  let component: BugEvaluationComponent;
  let fixture: ComponentFixture<BugEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
