import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nave } from 'src/app/models/recibir/nave.model';
import { SatelitesService } from 'src/app/services/satelites.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  // Form
  satForm: FormGroup;
  // Vars for changing background color
  bgColorSat1 = '#c9fce0';
  bgColorSat2: string;
  bgColorSat3: string;
  // Vars for show/hide progress divs
  div1: boolean;
  div2: boolean;
  div3: boolean;
  // Show response
  showResponse: boolean;
  errorMessage: string;
  isError: boolean;
  // Response data
  resMensaje: string;
  resCoordX: number;
  resCoordY: number;


  constructor(private fb: FormBuilder, private _satelites: SatelitesService) {
    this.satForm = this.fb.group({
      // Satélite 1
      Nombre1: ['', Validators.required],
      Distancia1: ['',Validators.required],
      Mensaje1: ['', Validators.required],
      // Satélite 2
      Nombre2: [{disabled:true , value:''}, Validators.required],
      Distancia2: [{disabled:true , value:''}, Validators.required],
      Mensaje2: [{disabled:true , value:''}, Validators.required],
      // Satélite 2
      Nombre3: [{disabled:true , value:''}, Validators.required],
      Distancia3: [{disabled:true , value:''}, Validators.required],
      Mensaje3: [{disabled:true , value:''}, Validators.required]
      //
    });

    this.bgColorSat2 = '#d8d8d8';
    this.bgColorSat3 = '#d8d8d8';
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.showResponse = false;
    this.errorMessage = '';
    this.isError = false;
    this.resMensaje = '';
    this.resCoordX = 0;
    this.resCoordY = 0;
  }

  ngOnInit(): void {
  }

  // Check if Satellites have data
  updateInputs(sat:number) {
    if(this.emptyInputs(sat)) {
      // Empty fields
      switch(sat) {
        case 1:
          this.div1 = false;
          //
          this.disable(sat + 1);
          break;
        case 2:
          this.div2 = false;
          //
          this.disable(sat + 1);
          this.enable(sat - 1);
          break;
        case 3:
          this.div3 = false;
          //
          this.enable(sat - 1);
          break;
      }
    }else{
      // All fields filled
      switch(sat) {
        case 1:
          this.div1 = true;
          //
          this.enable(sat + 1);
          break;
        case 2:
          this.div2 = true;
          //
          this.enable(sat + 1);
          this.disable(sat - 1);
          break;
        case 3:
          this.div3 = true;
          //
          this.disable(sat - 1);
          break;
      }
    }
  }

  emptyInputs(sat:number) {
    switch (sat) {
      // Analyze sat 1 fields
      case 1:
        return (this.satForm.value.Nombre1 == '' || this.satForm.value.Distancia1 == '' || this.satForm.value.Distancia1 == null || this.satForm.value.Mensaje1 == '') ? true : false;
      // Analyze sat 2 fields
      case 2:
        return (this.satForm.value.Nombre2 == '' || this.satForm.value.Distancia2 == '' || this.satForm.value.Distancia2 == null || this.satForm.value.Mensaje2 == '') ? true : false;
      // Analyze sat 3 fields
      case 3:
        return (this.satForm.value.Nombre3 == '' || this.satForm.value.Distancia3 == '' || this.satForm.value.Distancia3 == null || this.satForm.value.Mensaje3 == '') ? true : false;
        // Default
      default:
        return true;
    }
  }


  // Enable/disable inputs
  enable(sat:number) {
    this.satForm.controls[`Nombre${sat}`].enable();
    this.satForm.controls[`Distancia${sat}`].enable();
    this.satForm.controls[`Mensaje${sat}`].enable();
    // Change background of sat 1
    if(sat == 1) {
      this.bgColorSat1 = '#c9fce0';
    }
    // Change background of sat 2
    if(sat == 2) {
      this.bgColorSat2 = '#c9fce0';
    }
    // Change background of sat 3
    if(sat == 3) {
      this.bgColorSat3 = '#c9fce0';
    }
  }

  disable(sat:number) {
    this.satForm.controls[`Nombre${sat}`].disable();
    this.satForm.controls[`Distancia${sat}`].disable();
    this.satForm.controls[`Mensaje${sat}`].disable();
    // Change background of sat 1
    if(sat == 1) {
      this.bgColorSat1 = '#d8d8d8';
    }
    // Change background of sat 2
    if(sat == 2) {
      this.bgColorSat2 = '#d8d8d8';
    }
    // Change background of sat 3
    if(sat == 3) {
      this.bgColorSat3 = '#d8d8d8';
    }
  }


  // Omit keyboard input if there are two '_' or ' ' joined
  omitKeyboardInput(event: any, input: any) {
    var inputText:string;
    // Get actual text of input (before actual key is added)
    switch(input) {
      case 'n1':
        inputText = this.satForm.value.Nombre1;
        break;
      case 'm1':
        inputText = this.satForm.value.Mensaje1;
        break;
      case 'n2':
        inputText = this.satForm.value.Nombre2;
        break;
      case 'm2':
        inputText = this.satForm.value.Mensaje2;
        break;
      case 'n3':
        inputText = this.satForm.value.Nombre3;
        break;
      case 'm3':
        inputText = this.satForm.value.Mensaje3;
        break;
      default:
        inputText = '';
        break;
    }
    // Check wich key was pressed
    var key = String.fromCharCode(event.charCode);
    // If key pressed is '_' or ' ' and last one is the same -> omit keyboard input
    if(key == ' ' || key == '_') {
      if(inputText.slice(-1) == key){
        event.preventDefault();
      }
    }
  }


  // Send response
  triangularNave() {
    // Post data and get response
    this._satelites.post<Nave>(this.satForm).subscribe(
      (res) => {
        if(res.body != null) {
          // Prepare data for showing
          this.resMensaje = res.body.mensaje;
          this.resCoordX = res.body.posicion.x;
          this.resCoordY = res.body.posicion.y;
          // Show data
          this.showResponse = true;
        }
      },
      (error) => {
        // Prepare error for showing
        this.errorMessage = error;
        // Show error
        this.isError = true;
        this.showResponse = true;
      }
    );

  }



}
