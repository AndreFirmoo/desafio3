import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListaGeralComponent } from './lista-geral/lista-geral.component';
import { ListaMesComponent } from './lista-mes/lista-mes.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ListaGeralComponent,
    ListaMesComponent,
    ListaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule,FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
