import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman','Hulk','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
 //-> Borra todo el arreglo   this.heroes = [];
 //Borra el primer elmento y lo retorna .shift   
      this.heroeBorrado = this.heroes.shift() || '';

  }
}
