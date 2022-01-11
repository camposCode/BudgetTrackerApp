import { Egreso } from './egreso.model';
export class EgresoServicio{
    egresos: Egreso[] = [
        new Egreso("Alquiler", 419),
        new Egreso("Seguro Coche", 89)
    ]

    eliminar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}