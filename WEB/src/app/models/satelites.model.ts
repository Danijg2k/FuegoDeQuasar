import { Satelite } from "./satelite.model";

export class Satelites {
  id: number;
  satellites: Satelite[];

  constructor() {
    this.id = 0;
    this.satellites = new Array();
  }
}
