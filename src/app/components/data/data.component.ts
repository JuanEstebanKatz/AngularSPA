import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  usuario: any = {
    nombreCompleto: {
      nombre: "miguel",
      apellido: "katz"
    },
    correo: "mkatz@ath.es"
    /*     pasatiempos:["correr","Dormir","estudier"] */
  }


  constructor() {
    console.log(this.usuario);

    // este es el coreazon del formulario:.: 

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('',
          [Validators.required, Validators.minLength(4)]),
        'apellido': new FormControl('', [Validators.required, this.noLopez]),
      }),
      'correo': new FormControl('', [Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),

      'pasatiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ]),

      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(),
      'username': new FormControl('', Validators.required,this.existeUsuario)

    })

    /*  this.forma.setValue( this.usuario ) */

    this.forma.controls['password2'].setValidators([
      Validators.required, this.noIgual.bind(this.forma)
    ])

/*     this.forma.valueChanges.subscribe (data=>{
      console.log(data)
    })
 */
    this.forma.controls['username'].valueChanges.subscribe (data=>{
      console.log(data)
    })
    this.forma.controls['username'].statusChanges.subscribe
     (data=>{
      console.log(data)
    })
  }

  guardarCambios() {
    console.log(this.forma)

    /*     this.forma.reset({
            nombreCompleto: {
              nombre: "",
              apellido:""
            },
            correo:""
          }) */
  }

  agregarPasatiempos() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noLopez(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Lopez") {
      return {
        noLopez: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    /*     console.log(this)
    una maña por que el objeto this aparece al principio indefinido*/
    let forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === "strider") {
            resolve({ existe: true })
          } else {
            resolve(null)
          }
        }, 3000)
      }) 
      return promesa;
  }


}
