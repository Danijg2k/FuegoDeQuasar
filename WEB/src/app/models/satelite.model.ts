export class Satelite {
  id: number;
  name: string;
  distance: number;
  message: string[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.distance = 0;
    this.message = new Array();
  }
}
