import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { HeroeComponent } from './herore/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations:[
      HeroeComponent,
      ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports:[
    //todo lo que esta aca son modulos
    CommonModule
  ]

})
export class HeroesModule{}
