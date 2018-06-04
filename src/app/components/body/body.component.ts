import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{

mostrar = true;


//creamos un objeto
frase: any ={
  mensaje: 'Un mensajejejej'
  autor: 'Yopli'
};


//declaramos nuestro arreglo
personajes: string[] = ['Spiderman', 'Venom', 'Optimus']

}//class
