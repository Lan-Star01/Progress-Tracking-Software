import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
   constructor(private router: Router) {
  }

  navigateToAssignmentCreationPage() {
    this.router.navigate(['/create-assignment']);
  }
}
