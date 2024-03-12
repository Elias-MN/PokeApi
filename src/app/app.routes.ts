import { Routes } from '@angular/router';
import { MainComponent } from './domains/pages/main/main.component';
import { ListComponent } from './domains/pages/list/list.component';

export const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "list", component: ListComponent },
];
