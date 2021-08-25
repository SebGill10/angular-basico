import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Batman'; 
    edad: number = 45

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    //metodo
    obtenerNombre(): string{
        //Es lo mismo 
        //return this.nombre + ' - ' + this.edad.toString()
        return `${ this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'Robin';
    }

    cambiarEdad(): void{
        this.edad = 25;
    }
}