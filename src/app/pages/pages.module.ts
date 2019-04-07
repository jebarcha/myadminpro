import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PagesRoutesModule } from './pages.routes';

// Pipe module
import { PipesModule } from '../pipes/pipes.module';

// temporal aqui
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementerComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PipesModule
    ],
    imports: [CommonModule, SharedModule, PagesRoutesModule, FormsModule, ChartsModule]
 })
 export class PagesModule {}
