import { Component } from '@angular/core';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  fabricacaoDate = new Date('02-10-2000')
  p1 = new Produto('Lucas','lucas2020@hotmail.com',10000, 0.10, this.fabricacaoDate)

}
