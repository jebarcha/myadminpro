import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { PagesModule } from './pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// temporalmente aqui:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services (not needed as it has inroot)
// import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
