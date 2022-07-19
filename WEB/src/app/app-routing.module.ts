import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultasComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'notFound',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
