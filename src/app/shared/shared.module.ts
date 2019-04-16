import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
        ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        ModalUploadComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        ModalUploadComponent
    ]
})

export class SharedModule {}
