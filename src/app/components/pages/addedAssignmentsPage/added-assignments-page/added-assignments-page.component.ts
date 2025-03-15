import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departments, Employees, MomentumApiService, Priorities } from '../../../service/momentum-api.service';

@Component({
  selector: 'app-added-assignments-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './added-assignments-page.component.html',
  styleUrl: './added-assignments-page.component.css'
})
export class AddedAssignmentsPageComponent implements OnInit {

  constructor(private APIServices: MomentumApiService) {
  }

  departments: Departments[] = [];
  priorities: Priorities[] = [];
  employees: Employees[] = [];

  ngOnInit(): void {
    this.getDepartments();
    this.getPriorities();
    this.getEmployees();
  }

  getDepartments(): void {
    this.APIServices.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      }
    )
  }

  getPriorities(): void {
    this.APIServices.getPriorities().subscribe(
      (data) => {
        this.priorities = data;
      }
    )
  }

  getEmployees(): void {
    this.APIServices.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    )
  }
  
}
