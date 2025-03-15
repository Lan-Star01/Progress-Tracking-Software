import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddedAssignmentsPageComponent } from "./components/pages/addedAssignmentsPage/added-assignments-page/added-assignments-page.component";
import { HeaderComponent } from "./components/header/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddedAssignmentsPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Momentum';
}
