import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

interface Personaje{
  nombre : string;
  poder : number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  saludoInicial : string = 'Hola desde Angular';

  nuevoPersonaje : Personaje = {
    nombre : '',
    poder: 0
  }

  personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

    agregar(){
      if(this.nuevoPersonaje.nombre.trim().length === 0){
        return ;
      }
      this.personajes.push(this.nuevoPersonaje);
      console.log("Agregando...")
      this.nuevoPersonaje= {
        //para vaciar campos
        nombre: '',
        poder : 0
      }
    }


    cambiarNombre(event : any){
      console.log(event.target.value);
    }

  }



/*
  Manera 1 para que no se refresque la pagina al dar click al boton agregar
    agregar(event: any){
    event.preventDefault();
    console.log("Hola...");
    }
    */
