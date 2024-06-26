import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'detail', 
        loadChildren: () => import('./components/component-detail/component-detail.component').then(m => m.ComponentDetailComponent)
    },
    { 
        path: 'list', 
        loadChildren: () => import('./components/component-list/component-list.component').then(m => m.ComponentListComponent)
    },
    { 
        path: '', 
        redirectTo: 'list', pathMatch: 'full'
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

