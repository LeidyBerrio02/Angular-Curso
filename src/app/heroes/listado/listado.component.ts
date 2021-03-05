import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes : string[] = ['IronMan','SuperMan', 'Thor','Morcilla','Aguacate'];
  Hborrado : string = '';
  saludo : string = 'Hola Angular';

  borrarHeroe(){
    console.log('Borrando...');
    const heroeBorrado = this.heroes.pop() || '';
    this.Hborrado = heroeBorrado;
    console.log(heroeBorrado);
  }

  borrar1Heroe(){
    console.log('Borrando...');
    const heroeBorrado = this.heroes.shift()  || '';
    this.Hborrado = heroeBorrado;
    console.log(heroeBorrado);
  }


  borrarTodosHeroe(){
    console.log('Borrando Todos...');
    this.heroes = [];
  }
}
