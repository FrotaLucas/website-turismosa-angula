import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pasta/home/home.component';
import { ListaComponent } from './pasta/lista/lista.component';
import { MenuComponent } from './pasta/menu/menu.component';
import { ContatoComponent } from './pasta/contato/contato.component';
const routes: Routes = [
  {path: '',  component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'contato', component: ContatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
