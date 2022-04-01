import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementAnalysisComponent } from './requirement-analysis.component';

describe('RequirementAnalysisComponent', () => {
  let component: RequirementAnalysisComponent;
  let fixture: ComponentFixture<RequirementAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
