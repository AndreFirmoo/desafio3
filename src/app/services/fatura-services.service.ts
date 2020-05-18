import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Categoria } from '../interfaces/Categoria';
import { Fatura } from '../interfaces/Fatura';
@Injectable({
  providedIn: 'root'
})
export class FaturaServicesService {

  constructor(private httpClient: HttpClient) { }

  lancamentos = '/api/lancamentos';
  categorias = '/api/categorias';


  getAllLancamentos(){
    return this.httpClient.get<Fatura[]>(this.lancamentos)
  }

  getAllCategorias(){
    return this.httpClient.get<Categoria[]>(this.categorias)
  }
  byCategoria(id:number){
    
    return this.httpClient.get<Fatura[]>(`${this.lancamentos}?categoria=${id}`)
  }
  byMonth(id:number){
    return this.httpClient.get<Fatura[]>(`${this.lancamentos}?mes=${id}`)
  }

}
