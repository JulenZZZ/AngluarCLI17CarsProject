import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-fruta',
  standalone: true,
  imports: [CommonModule,AppComponent,EmpleadosComponent],
  templateUrl: './fruta-component.component.html',
  styleUrl: './fruta-component.component.css'
})
export class FrutaComponentComponent {
      public nombre_componente='Conponente de fruta';
      public listado_frutas='Naranja, Manzana, Pera y Sandia';

      public nombre:string;
      public edad:number;
      public mayorDeEdad:boolean;
      public trabajos:Array<any> = ['Carpintero', 22, 'Albanil'];
      comodin:any;

      constructor(){

        this.nombre='David';
        this.edad= 77;
        this.mayorDeEdad= false;
        this.comodin= 'SI';

        
      }

      ngOnInit(){
        
        this.cambiarNombre();
        this.cambiarEdad(22);
        console.log(this.nombre +' '+this.edad);
      }

      cambiarNombre(){
        this.nombre='Juan Bigotuo';
      }
      cambiarEdad(age:number){
        this.edad=age;
      }

}
