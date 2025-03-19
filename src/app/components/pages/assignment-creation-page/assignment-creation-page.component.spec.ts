import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCreationPageComponent } from './assignment-creation-page.component';

describe('AssignmentCreationPageComponent', () => {
  let component: AssignmentCreationPageComponent;
  let fixture: ComponentFixture<AssignmentCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentCreationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
