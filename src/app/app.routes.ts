import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'detail', 
        loadChildren: () => import('./components/application-detail/application-detail.component').then(m => m.ApplicationDetailComponent)
    },
    { 
        path: 'list', 
        loadChildren: () => import('./components/application-list/application-list.component').then(m => m.ApplicationListComponent)
    },
    { 
        path: '', 
        redirectTo: 'list', pathMatch: 'full'
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

