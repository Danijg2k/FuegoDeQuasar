import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HelperActiveService } from 'src/app/services/helpers/helper-active';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opciones = ['Consultas', 'Registro', 'About'];
  componentes = [
    'ConsultasComponent',
    'RegistroComponent',
    'AboutComponent',
  ];

  activeLink: string;

  constructor(private helper: HelperActiveService) {
    this.activeLink = '';
  }

  ngOnInit() {
    this.helper.customMessage.subscribe(
      (msg) => (this.activeLink = this.opciones[this.componentes.indexOf(msg)])
    )
  }

}
