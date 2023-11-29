import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  public titulos='Componente Empleados';
  public empleado!: Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;

  constructor(){

    this.empleado = new Empleado('David Lopez',44,'Programado',true);
    this.trabajadores = [

      new Empleado('Manolo Kabezabolo',35,'Administrativo',false),
      new Empleado('Ana Lopez',25,'Cocinera',true),
      new Empleado('Julio Grejner',66,'Cocinero',false)
    ];
    this.trabajador_externo = false;

  }

  ngOnInit(){

    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor:any){

    this.trabajador_externo = valor;
  }
  
}
