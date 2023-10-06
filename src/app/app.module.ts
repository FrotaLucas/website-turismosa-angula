import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pasta/home/home.component';
import { ListaComponent } from './pasta/lista/lista.component';
import { MenuComponent } from './pasta/menu/menu.component';
import { ContatoComponent } from './pasta/contato/contato.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt'

registerLocaleData(ptBr)
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    MenuComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
