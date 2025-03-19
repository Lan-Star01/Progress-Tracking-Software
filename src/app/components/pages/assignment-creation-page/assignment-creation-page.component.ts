import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departments, Employees, MomentumApiService, Priorities, Statuses } from '../../service/momentum-api.service';
import { CommonModule } from '@angular/common';
import flatpickr from "flatpickr";
import { Georgian } from "flatpickr/dist/l10n/ka.js";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-assignment-creation-page',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './assignment-creation-page.component.html',
  styleUrl: './assignment-creation-page.component.css'
})
export class AssignmentCreationPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private APIServices: MomentumApiService,) {
    this.createAssignmentForm();
  }

  createAssignment!: FormGroup;
  departments: Departments[] = [];
  priorities: Priorities[] = [];
  employees: Employees[] = [];
  statuses: Statuses[] = [];
  isDropdownOpen = false;
  priorityIcon = '';

  ngOnInit(): void {
    this.getDepartments();
    this.getPriorities();
    this.getEmployees();
    this.getStatuses();
  }

  createAssignmentForm() {
    this.createAssignment = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      description: ['', [Validators.maxLength(255), this.minWordsValidator(4)]],
      priority: this.fb.group({
        name: ['საშუალო', Validators.required],
        icon: ['']
      }),
      status: ['', Validators.required],
      department: ['', Validators.required],
      employee: ['', Validators.required],
      deadline: [this.getTomorrowDate(), [Validators.required, this.futureDateValidator()]],
    })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectEmployee(emp: any) {
    this.createAssignment.patchValue({ employee: emp });
  }
  selectPriority(priority: string, priorityIcon: string) {
    this.createAssignment.patchValue({ 
      priority: { name: priority, icon: priorityIcon } 
    });
  }

  selectDepartment(department: any) {
    this.createAssignment.patchValue({ department: department });
  }

  selectStatus(status: any) {
    this.createAssignment.patchValue({ status: status });
  }
  
  minWordsValidator(minWords: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.trim();
      if (!value) return null;
      const words = value.split(/\s+/);
      return words.length >= minWords ? null : { minWords: true };
    };
  }

  futureDateValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return selectedDate >= today ? null : { pastDate: true };
    };
  }

  getTomorrowDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
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
        const defaultPriority = this.priorities.find(p => p.name === 'საშუალო');

        this.createAssignment.patchValue({ 
          priority: { 
            name: 'საშუალო', 
            icon: defaultPriority ? defaultPriority.icon : '' 
          } 
        });
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

  getStatuses(): void {
    this.APIServices.getStatuses().subscribe(
      (data) => {
        this.statuses = data;
      }
    )
  }
}

