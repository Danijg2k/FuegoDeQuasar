import { Posicion } from "./posicion.model";

export class Satelite {
  id: number;
  nombre: string;
  distancia: number;
  mensajeString: string;
  posicion: Posicion;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.distancia = 0;
    this.mensajeString = '';
    this.posicion = new Posicion();
  }
}
