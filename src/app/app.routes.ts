import { Routes } from '@angular/router';
import { AcortarComponent } from './components/acortar/acortar.component';
import { ObtenerUrlOriginalComponent } from './components/obtener-url-original/obtener-url-original.component';

export const routes: Routes = [
    { path: 'acortar', component: AcortarComponent },
    { path: 'obtenerUrlOriginal/:uuid', component: ObtenerUrlOriginalComponent },
    { path: '', redirectTo: '/acortar', pathMatch: 'full' },
];
