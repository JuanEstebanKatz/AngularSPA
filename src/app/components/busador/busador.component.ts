import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busador',
  templateUrl: './busador.component.html'
})
export class BusadorComponent implements OnInit {

  heroes:any[]=[];
  termino : string ;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService:HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      //  console.log(params['termino'])
      this.termino=params['termino'];
      this.heroes = this.heroService.buscarHeroes(params['termino'])
      console.log(this.heroes)
    });
  }

}
