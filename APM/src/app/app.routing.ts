import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

const APP_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
