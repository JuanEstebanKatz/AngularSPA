import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

  heroe : any;
  constructor( private _activatedRoute: ActivatedRoute,
               private heroeService :HeroesService,
               private route:Router) { 

    this._activatedRoute.params.subscribe( parametros =>{
      this.heroe = heroeService.getHeroe(parametros['id'])
      //console.log(this.heroe);
    })

  }

  regresar(){
    this.route.navigate(['heroes'])
  }

}
