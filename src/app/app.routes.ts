import { Routes } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { leftStoragenav } from './components/left-storage-nav/left-storage-nav.component';
import { devices } from './components/devices/devices.component';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';



export const routes: Routes = [
    { path: 'login', pathMatch: 'full',
    component: LoginComponent },
    { path: 'home', pathMatch: 'full',
    component: HomeComponent },
    { path: 'left-storage-nav', pathMatch: 'full',
    component: leftStoragenav },
    { path: 'devices', pathMatch: 'full',
    component: devices },
    { path: 'PlanDetailsComponent', pathMatch: 'full',
    component: PlanDetailsComponent },
    

    
];
