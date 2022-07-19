import { HelperActiveService } from './services/helpers/helper-active';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Ng Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular material
import { MatTabsModule } from '@angular/material/tabs';

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
    MatTabsModule
  ],
  providers: [HelperActiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
