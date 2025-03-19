import { Routes } from '@angular/router';
import { AddedAssignmentsPageComponent } from './components/pages/addedAssignmentsPage/added-assignments-page/added-assignments-page.component';
import { AssignmentCreationPageComponent } from './components/pages/assignment-creation-page/assignment-creation-page.component';

export const routes: Routes = [
    { path: '', component: AddedAssignmentsPageComponent },
    { path: 'create-assignment', component: AssignmentCreationPageComponent }
];
