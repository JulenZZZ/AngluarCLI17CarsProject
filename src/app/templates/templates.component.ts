import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html',
    imports:[CommonModule],
    standalone: true

})

export class TemplatesComponent{
    public titulo;
    public administador;

    constructor(){
       this.titulo = 'Plantillas ngTemplate en Angular';
       this.administador = true;
    }

    cambiar(value:boolean){
        
        this.administador=value;

    }
}