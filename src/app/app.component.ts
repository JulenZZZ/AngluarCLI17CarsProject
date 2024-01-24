import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FrutaComponentComponent } from './fruta-component/fruta-component.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule, FrutaComponentComponent, EmpleadosComponent,FormsModule,ReactiveFormsModule,HomeComponent,
  ContactComponent, ConversorPipe, CochesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componente base principal';
}
