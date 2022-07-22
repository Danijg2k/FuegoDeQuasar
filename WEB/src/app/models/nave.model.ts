import { Posicion } from './posicion.model';
export class Nave {
  id: number;
  mensaje: string;
  posicion: Posicion;

  constructor() {
    this.id = 0;
    this.mensaje = '';
    this.posicion = new Posicion();
  }
}
