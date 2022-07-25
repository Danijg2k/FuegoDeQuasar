import { Posicion } from './posicion.model';


export class Nave {
  mensaje: string;
  posicion: Posicion;

  constructor() {
    this.mensaje = '';
    this.posicion = new Posicion();
  }

}
