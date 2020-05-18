import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fatura } from '../interfaces/Fatura';
import { FaturaServicesService } from '../services/fatura-services.service';

@Component({
  selector: 'fatura-lista-mes',
  templateUrl: './lista-mes.component.html',
  styleUrls: ['./lista-mes.component.scss']
})
export class ListaMesComponent implements OnInit {

  constructor(private faturaServices:FaturaServicesService) { }
  list: Observable<Fatura[]>
  numero:number
  numberOfMonth = [
    {id: 1, mouth:"Janeiro"},
    {id: 2, mouth:"Fevereiro"},
    {id: 3, mouth:"Marco"},
    {id: 5, mouth:"Maio"},
    {id: 6, mouth:"Junho"},
    {id: 7, mouth:"Julho"},
    
  ] 
  ngOnInit(): void {
    
  }

  selectOption(id: number) {
    console.log(id)
    this.list = this.faturaServices.byMonth(id)
  }


}
