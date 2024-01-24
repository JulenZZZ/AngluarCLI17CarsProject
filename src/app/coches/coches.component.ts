import { Component } from "@angular/core";
import {Coche} from './coche';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    standalone: true,
    imports:[FormsModule,CommonModule]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;

    constructor(){
        this.coche = new Coche('','','');
        this.coches = [
            new Coche('Seat Panda','120','Rojo'),
            new Coche('Renault 5','190','Amarillo')
        ];
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche('','','');
    }
}