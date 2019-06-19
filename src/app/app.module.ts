import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// para formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



//modulos
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

// rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusadorComponent } from './components/busador/busador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { DataComponent } from './components/data/data.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BusadorComponent,
    HeroeTarjetaComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
