import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedAssignmentsPageComponent } from './added-assignments-page.component';

describe('AddedAssignmentsPageComponent', () => {
  let component: AddedAssignmentsPageComponent;
  let fixture: ComponentFixture<AddedAssignmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedAssignmentsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedAssignmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
