import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './content/profile/profile.component';
import { Dashboard2Component } from './content/dashboard2/dashboard2.component';
import { Dashboard1Component } from './content/dashboard1/dashboard1.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard1', component: Dashboard1Component},
            {path: 'dashboard2', component: Dashboard2Component},
            {path: 'profile', component: ProfileComponent},
        ]
    },
    {path: '**', redirectTo: 'dashboard1', pathMatch: 'full'},
]
