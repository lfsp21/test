import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

//cambia el año automaticamente
anio: number;

constructor(){
  this.anio = new Date().getFullYear();
}

}
