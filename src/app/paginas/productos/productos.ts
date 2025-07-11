import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { IProducto } from '../../interfaces/producto';
import { Producto } from '../../services/producto';
import { Buscador } from '../buscador/buscador';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgIf, NgFor, HttpClientModule, FormsModule, RouterOutlet, Buscador],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  listaProductos: IProducto[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nombreProducto: string = '';
  IDProductoActual: number = 0;

  constructor(
    private _productoService: Producto,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      const categoria = params['categoria'] || '';
      const busqueda = params['busqueda'] || '';

      if (!categoria && !busqueda) {
        this.obtenerProductos();
      } else {
        this.obtenerFiltrados(categoria, busqueda); 
      }
    });
  }

  obtenerProductos() {
    this._productoService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.error('Error al obtener todos los productos:', e);
      }
    });
  }

  obtenerFiltrados(categoria: string, busqueda: string) {
    this._productoService.getList().subscribe({
      next: (data) => {
        let filtrados = data;

        if (categoria) {
          filtrados = filtrados.filter(p => p.categoria === categoria);
        }

        if (busqueda) {
          const lower = busqueda.toLowerCase();
          filtrados = filtrados.filter(p =>
            p.nombre.toLowerCase().includes(lower)
          );
        }

        this.listaProductos = filtrados;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.error('Error al obtener productos filtrados:', e);
      }
    });
  }
}
