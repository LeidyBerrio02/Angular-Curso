    import { Component} from '@angular/core'


    @Component({
      selector: 'app-contador',
      template: `


<h2>

    Hola Mundo</h2>

<h5>{{1+1}}</h5>




<span>{{undefined}}</span>

<!--El () significa un evento de angular-->
<button (click)="numero = numero +1">+1</button>

<span>{{numero}}</span>

<button (click)="numero = numero -1">-1</button>

<h3>{{tituloSecundario}}</h3>

<button (click)="sumar()">Incrementar</button>

<span>{{nuevoNumero}}</span>

<button (click)="restar()">Decrementar</button>

<button (click)="acumular(+2)">+2</button>

<span>{{numero2}}</span>

<button (click)="acumular(-2)">-2</button>


<h2>{{titulo2}}</h2>

<button (click)="tareaIncrementando(base)">+5</button>

<span>{{five}}</span>


<button (click)="tareaDecrementando(base)">-5</button>

<br><br><br>

<button (click)="acumular5(base)">+ {{base}}</button>

<span>{{fiveN}}</span>

<button (click)="acumular5(-base)">- {{base}}</button>

      `


    })
    export class ContadorComponent {


      title : string = 'bases';
      tituloSecundario : string = 'Hola Mundo desde Angular';
      numero : number = 1;
      nuevoNumero : number = 5;
      numero2: number = 2;
      titulo2: string = 'Tarea ';
      five : number = 5;
      base : number = 5;
      fiveN : number = 5;

      sumar(){
        this.nuevoNumero += 1;
      }

      restar(){
        this.nuevoNumero -= 1;
      }

      acumular(valor : number){
        this.numero2 += valor;
      }

      tareaIncrementando(base : number){
        this.five += base;
      }

      tareaDecrementando(base : number){
        this.fiveN -= base;
      }

      acumular5(valor : number){
        this.fiveN += valor;
      }


    }
