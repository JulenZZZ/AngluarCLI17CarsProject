import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FrutaComponentComponent } from './fruta-component/fruta-component.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FrutaComponentComponent, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componente base principal';
}
