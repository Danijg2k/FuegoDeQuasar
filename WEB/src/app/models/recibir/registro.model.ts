import { Nave } from "./nave.model";
import { Satelite } from "./satelite.model";

export class Registro {

  id: number;
  satelites: Satelite[];
  respuesta: Nave;

  constructor() {
    this.id = 0;
    this.satelites = new Array();
    this.respuesta = new Nave();
  }
}
