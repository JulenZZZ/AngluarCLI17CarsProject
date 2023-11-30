import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from './empleado';
import { FormsModule  } from "@angular/forms";

@Component({
  selector: 'empleado-tag',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  public titulos='Componente Empleados';
  public empleado!: Empleado;
  public trabajadores:Array<Empleado>;
  public personas:Array<any>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:any;

  constructor(){

    this.empleado = new Empleado('David Lopez',44,'Programado',true);
    this.trabajadores = [

      new Empleado('Manolo Kabezabolo',35,'Administrativo',false),
      new Empleado('Ana Lopez',25,'Cocinera',true),
      new Empleado('Julio Grejner',66,'Cocinero',false)
    ];
    this.trabajador_externo = false;
    this.color = 'blue';
    /*using [(ngModule)] and useValue() function to use two way data-binding on view*/
    this.color_seleccionado = '#ccc'

    this.personas = ['Benancio',22,'Arturo',11,'Carlos',55];
  }

  ngOnInit(){

    console.log(this.empleado);
    console.log(this.trabajadores);
    
  }

  cambiarExterno(valor:any){

    this.trabajador_externo = valor;
  }

  setValue(){
    this.color_seleccionado='red';
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
  
}
