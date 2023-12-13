import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//rutas y parametros por la url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  
})
export class ContactComponent {
  public titulo='Contacto';
  public parametro: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    //arrow function to receive parameters from URL
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page']; 
    });
  }

  redirect(){
    this._router.navigate(['/contacto','parameter']);
  }

  redirectHome(){
    this._router.navigate(['/pagina-principal']);
  }
}

