import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginService } from './services/login.service';
import { ProjectService } from './services/project.service';

import { HttpAuthInterceptor } from './interceptor/http-auth-interceptor';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    ProjectService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

