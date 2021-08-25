import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
   //Las delaraciones son arreglos || Son los componentes del modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //Cosas fueraz visibles fueras del modulo
    exports: [
        ListadoComponent
    ],
    //Cuando se mire los imports 
    // Quiere decir que solo van modules dentro del arreglo
    imports: [
       CommonModule
    ]
})
export class HeroesModules{}