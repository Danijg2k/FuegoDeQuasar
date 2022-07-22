import { Component, OnInit } from '@angular/core';
import { NaveService } from 'src/app/services/nave.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  // TODO GET ALL Y REGISTRO
  constructor(private _nave:NaveService) { }

  ngOnInit(): void {

  }

}
