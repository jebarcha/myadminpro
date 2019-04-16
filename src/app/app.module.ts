import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';

// temporalmente aqui:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services (not needed as it has inroot)
// import { ServiceModule } from "./services/service.module";
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    // ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
