import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './Componentes/navbar/navbar.component';
import {SpinnerComponent} from './Componentes/spinner/spinner.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ConfirmationService, MessageService} from "primeng/api";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SpinnerInterceptor} from "./Interceptores/spinner.interceptor";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { NegocioComponent } from './Componentes/negocio/negocio.component';
import { BienestarComponent } from './Componentes/bienestar/bienestar.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    InicioComponent,
    NosotrosComponent,
    NegocioComponent,
    BienestarComponent,
    ContactanosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
