import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
import { CommonModule } from '@angular/common';
import { FormsModule  } from "@angular/forms";
import { ConversorPipe } from "../pipes/conversor.pipe";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    providers: [RopaService],
    imports: [CommonModule, FormsModule, ConversorPipe]
})

export class HomeComponent {
  public titulo='Pagina Home';
  public listado_ropa: Array<string> = [];
  public ropa_a_anadir: any;
  public fecha;
  public nombre = 'Juan ALbertO';

  constructor(
    private _ropaService: RopaService
  ){
    this.fecha = new Date(2024, 0, 9);

  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
    
  }

  anadirRopa(){
    this._ropaService.addRopa(this.ropa_a_anadir);
    this.ropa_a_anadir = null;
    console.log('LA ropa a anadir:',this.ropa_a_anadir);
  }

  eliminarRopa(index:number){
    this._ropaService.deleteRopa(index);
  }
}
