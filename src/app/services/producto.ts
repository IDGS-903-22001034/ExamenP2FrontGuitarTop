import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class Producto {
  private _endPoint: string = environment.endPoint;
  private _apiUrl: string = this._endPoint + "Productos/";

  constructor(private http: HttpClient) { }

  //Método para invocar al endpoint de ListaProductos.
  getList(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(`${this._apiUrl}ListaProductos`);
  }

  getFiltrados(categoria: string, busqueda: string): Observable<IProducto[]> {
  let params: any = {};

  if (categoria && categoria !== 'Todos') {
    params.categoria = categoria;
  }
  if (busqueda) {
    params.busqueda = busqueda;
  }

  return this.http.get<IProducto[]>(`${this._apiUrl}ListaProductos`, { params });
}

}
