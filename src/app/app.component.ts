import { Component } from '@angular/core';
import { Ingreso } from './components/ingreso/ingreso.model';
import { Egreso } from './components/egreso/egreso.model';
import { IngresoServicio } from './components/ingreso/ingreso.servicio';
import { EgresoServicio } from './components/egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal =+ ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal =+ egreso.valor;
    });
    return egresoTotal;
  }

  get PorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }
  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
