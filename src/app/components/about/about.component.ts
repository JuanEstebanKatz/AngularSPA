import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`.ng-invalid.ng-touched:not(form){
              border: 1px solid red;
  }`]
})
export class AboutComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo:"Hombre"
  }

  sexos:string[] =["Hombre","Mujer","si definir"]

  paises = [{
    codigo: "col",
    nombre: "Colombia"
  },
  {
    codigo: "bra",
    nombre: "Brasil"
  }]
  constructor() { }


  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("Valor del formulario", forma.value);
    console.log("USER", this.usuario);

  }

}
