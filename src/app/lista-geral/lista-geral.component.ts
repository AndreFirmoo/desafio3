import { Component, OnInit } from '@angular/core';
import { FaturaServicesService } from '../services/fatura-services.service';
import { Observable } from 'rxjs';
import { Fatura } from '../interfaces/Fatura';

@Component({
  selector: 'fatura-lista-geral',
  templateUrl: './lista-geral.component.html',
  styleUrls: ['./lista-geral.component.scss']
})
export class ListaGeralComponent implements OnInit {

  constructor(private faturaSercice: FaturaServicesService) { }

  list:Observable<Fatura[]>
  ngOnInit(): void {
    this.getAllFaturas()
  }


  getAllFaturas(){
    this.list = this.faturaSercice.getAllLancamentos()
  }
}
