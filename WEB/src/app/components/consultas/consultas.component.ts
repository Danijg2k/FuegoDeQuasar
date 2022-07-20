import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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



  constructor(private fb: FormBuilder) {

    this.satForm = this.fb.group({
      // Satélite 1
      Nombre1: ['', Validators.required],
      Distancia1: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      Mensaje1: ['', Validators.required],
      // Satélite 2
      Nombre2: [{disabled:true , value:''}, Validators.required],
      Distancia2: [
        {disabled:true , value:''},
        Validators.compose([
          Validators.required
        ]),
      ],
      Mensaje2: [{disabled:true , value:''}, Validators.required],
      // Satélite 2
      Nombre3: [{disabled:true , value:''}, Validators.required],
      Distancia3: [
        {disabled:true , value:''},
        Validators.compose([
          Validators.required
        ]),
      ],
      Mensaje3: [{disabled:true , value:''}, Validators.required]
      //
    });

    this.bgColorSat2 = '#d8d8d8';
    this.bgColorSat3 = '#d8d8d8';
  }

  ngOnInit(): void {}

  // Check if Satellites have data
  updateInputs(sat:number) {
    // If previous sat has an empty field
    if(this.emptyInputs(sat-1)) {
      // Disable actual sat fields
      this.enableDisable(sat, 'disable');
      // If sat 2 is empty, let modify sat 1
      if(sat == 3){
        this.enableDisable(1, 'enable');
      }
    }else{
      // Enable actual sat fields
      this.enableDisable(sat, 'enable');
      // If sat 2 is filled, don't let modify sat 1
      if(sat == 3){
        this.enableDisable(1, 'disable');
      }
    }
  }

  emptyInputs(sat:number) {
    switch (sat) {
      case 1:
        return (this.satForm.value.Nombre1 == '' || this.satForm.value.Distancia1 == null || this.satForm.value.Mensaje1 == '') ? true : false;
      case 2:
        return (this.satForm.value.Nombre2 == '' || this.satForm.value.Distancia2 == null || this.satForm.value.Mensaje2 == '') ? true : false;
      default:
        return true;
    }
  }


  // Enable/disable inputs
  enableDisable(sat:number, option:string) {
    if(option == 'enable') {
      this.satForm.controls[`Nombre${sat}`].enable();
      this.satForm.controls[`Distancia${sat}`].enable();
      this.satForm.controls[`Mensaje${sat}`].enable();
      if(sat == 2) {
        this.bgColorSat2 = '#c9fce0';
      }
      if(sat == 3) {
        this.bgColorSat3 = '#c9fce0';
      }
    }
    else if(option == 'disable') {
      this.satForm.controls[`Nombre${sat}`].disable();
      this.satForm.controls[`Distancia${sat}`].disable();
      this.satForm.controls[`Mensaje${sat}`].disable();
      if(sat == 2) {
        this.bgColorSat2 = '#d8d8d8';
      }
      if(sat == 3) {
        this.bgColorSat3 = '#d8d8d8';
      }
    }
  }

  // Send response
  triangularNave() {

  }

}
