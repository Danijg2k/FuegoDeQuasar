export class Satellite {
  name: string;
  distance: number;
  message: string[];

  constructor(name:string = '', distance:number = 0, message:string[] = []) {
    this.name = name;
    this.distance = distance;
    this.message = message;
  }

}
