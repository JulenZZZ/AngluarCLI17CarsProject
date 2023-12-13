import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// Importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponentComponent } from './fruta-component/fruta-component.component';
import { ContactComponent } from './contact/contact.component'; 
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: '',  component: HomeComponent},
    {path: 'empleado',  component: EmpleadosComponent},
    {path: 'fruta',  component: FrutaComponentComponent},
    {path: 'pagina-principal',  component: HomeComponent},
    {path: 'contact',  component: ContactComponent},
    {path: 'contact/:page',  component: ContactComponent},
    {path: '**',  component: ContactComponent}
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);