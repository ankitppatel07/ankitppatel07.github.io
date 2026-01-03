import { Routes } from '@angular/router';
import { OldHomeComponent } from './old-ui/old-home.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'old-home', component: OldHomeComponent },
    { path: '**', redirectTo: '' } // Wildcard to catch 404s and go home
];
