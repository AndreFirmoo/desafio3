import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categoria';
import { FaturaServicesService } from '../services/fatura-services.service';
import { Fatura } from '../interfaces/Fatura';

@Component({
  selector: 'fatura-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  constructor(private faturaServices:FaturaServicesService) { }
  categorias : Observable<Categoria[]>
  list: Observable<Fatura[]>
  numero:number
  ngOnInit(): void {
    this.populateSelect()
  }

  selectOption(id: number) {
    this.list = this.faturaServices.byCategoria(id)
  }
  

  populateSelect(){
    this.categorias = this.faturaServices.getAllCategorias()
  }


}
