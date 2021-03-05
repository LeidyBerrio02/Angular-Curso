import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

  nombre : string = 'IronMan';
  edad : number = 22;

  obtenerNombre():string{

    return `${this.nombre} - ${this.edad}`;
  }

get nombreCapitalizado(){
  return this.nombre.toUpperCase();
}

get nombreMinuscula(){
  return this.nombre.toLowerCase();
}

cambiarNombre() : void{
this.nombre = 'SuperMan';
}

cambiarEdad(): void{
this.edad= 33;
}


}
