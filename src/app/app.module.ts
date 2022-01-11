import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { IngresoServicio } from './components/ingreso/ingreso.servicio';
import { EgresoServicio } from './components/egreso/egreso.servicio';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresoServicio,
    EgresoServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
