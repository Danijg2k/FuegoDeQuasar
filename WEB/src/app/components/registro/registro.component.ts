import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/recibir/registro.model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registros: Registro[];
  dataSource: Registro[];

  constructor(private _registro: RegistroService) {
    this.registros = [];
    this.dataSource = [];
  }

  ngOnInit() {
    // this._registro.getAll().subscribe((x) => (this.registros = x) && this.loadData());

    // Obtener todos los registros, y cargar resultados en la tabla
    this._registro.getAllAxios().then(resp => {
      this.registros = resp;
      this.loadData();
    });
  }

  displayedColumns: string[] = ['id','sat1Nombre','sat1Distancia','sat1Mensaje','sat1Posicion','sat2Nombre','sat2Distancia','sat2Mensaje','sat2Posicion','sat3Nombre','sat3Distancia','sat3Mensaje','sat3Posicion','respuestaMensaje','respuestaPosicion'];

  loadData() {
    this.dataSource = this.registros;
  }

}
