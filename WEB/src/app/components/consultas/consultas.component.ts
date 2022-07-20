import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  newEmpForm: FormGroup;
  show: boolean;
  hidePass: boolean;
  hideRepeat: boolean;
  visible: boolean;
  warnMessage: string;

  constructor(private fb: FormBuilder) {
    this.newEmpForm = this.fb.group({
      Nombre: ['', Validators.required],
      Edad: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(16),
          Validators.max(67),
        ]),
      ],
      Direccion: ['', Validators.required],
      Puesto: ['', Validators.required],
      Dni: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(9)]),
      ],
      Email: ['', Validators.required],
      Rol: ['', Validators.required],
      Pass: ['', Validators.required],
      PassRep: ['', Validators.required],
    });
    this.show = false;
    this.hidePass = true;
    this.hideRepeat = true;
    this.visible = false;
    this.warnMessage = '';
  }

  ngOnInit(): void {}

  createEmp() {
    // Contraseñas iguales
    if (this.newEmpForm.value.Pass != this.newEmpForm.value.PassRep) {
      this.warnMessage = 'Las contraseñas no coinciden';
      this.visible = true;
      return;
    }
    // Admin o User
    if (
      this.newEmpForm.value.Rol != 'Admin' &&
      this.newEmpForm.value.Rol != 'User'
    ) {
      this.warnMessage = 'El rol debe ser "Admin" o "User"';
      this.visible = true;
      return;
    }


  }

}
