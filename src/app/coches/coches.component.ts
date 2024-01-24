import { Component } from "@angular/core";
import {Coche} from './coche';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PeticionesService } from "../services/peticiones.service";
import { error } from "console";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    standalone: true,
    imports:[FormsModule,CommonModule],
    providers:[PeticionesService,HttpClient]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos: any;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche('','','');
        this.coches = [
            new Coche('Seat Panda','120','Rojo'),
            new Coche('Renault 5','190','Amarillo')
        ];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                
                if(!this.articulos){
                    console.log("Error en el servidor");
                }
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche('','','');
    }
}