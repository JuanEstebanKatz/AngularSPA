import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busador',
  templateUrl: './busador.component.html',
  styles: []
})
export class BusadorComponent implements OnInit {

  heroe:any[]=[];
  termino : string ;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService:HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      //  console.log(params['termino'])
      this.termino=params['termino'];
      this.heroe = this.heroService.buscarHeroes(params['termino'])
      console.log(this.heroe)
    });


  }

}
