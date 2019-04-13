import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';

const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate: [LoginGuardGuard],
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { pageTitle: "Dashboard" }},
        { path: 'progress', component: ProgressComponent, data: { pageTitle: "Progress" }},
        { path: 'graficas1', component: Graficas1Component, data: { pageTitle: "Graphics" }},
        { path: 'promesas', component: PromesasComponent, data: { pageTitle: "Promises" }},
        { path: 'rxjs', component: RxjsComponent, data: { pageTitle: "RXJS" } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { pageTitle: "Account Settings" }},
        { path: 'profile', component: ProfileComponent, data: { pageTitle: "User Profile" }},

        // Mantenimientos
        { path: 'usuarios', component: UsuariosComponent, data: { pageTitle: "Users Mtto" }},
        { path: 'hospitales', component: HospitalesComponent, data: { pageTitle: "Hospitals Mtto" }},
        { path: 'medicos', component: MedicosComponent, data: { pageTitle: "Medicos Mtto" }},
        { path: 'medico/:id', component: MedicoComponent, data: { pageTitle: "Update Medico" }},

        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutesModule { }


