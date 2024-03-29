// Services
import { RegistroService } from './services/registro.service';
import { SatelitesService } from './services/satelites.service';
import { SateliteService } from './services/satelite.service';
import { HelperActiveService } from './services/helpers/helper-active';
import { AppRoutingModule } from './app-routing.module';
// Angular base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
// Ng Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular material
import { MaterialExampleModule } from './../material.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConsultasComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    HttpClientModule,
  ],
  providers: [HelperActiveService, SateliteService, SatelitesService, RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
