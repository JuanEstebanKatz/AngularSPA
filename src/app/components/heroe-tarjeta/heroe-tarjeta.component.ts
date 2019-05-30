import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //indica que el componente padre Heroes envia dos parametros heroe e index
  // el componente heroe tarjeta lo recibe
  @Input() heroe:any ={};
  @Input() index: number;

  // el evento que quiero que el padre escuche
  @Output() heroeSeleccionado : EventEmitter <number>

  constructor( private router:Router) { 
    // se inicializa el event emmiter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    //console.log(this.index)
    this.router.navigate(['/heroe',this.index])
   // this.heroeSeleccionado.emit(this.index);
  }

}
