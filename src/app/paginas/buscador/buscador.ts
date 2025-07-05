import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
  standalone: true,
  imports: [FormsModule]
})
export class Buscador {
  terminoBusqueda: string = '';
  categoriaActual: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Leer la categoría si ya viene desde la URL
    this.route.queryParams.subscribe(params => {
      this.categoriaActual = params['categoria'] || '';
    });
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaActual = categoria;
    this.router.navigate(['/productos'], {
      queryParams: { categoria: categoria, busqueda: this.terminoBusqueda }
    });
  }

  buscarPorNombre() {
    this.router.navigate(['/productos'], {
      queryParams: {
        categoria: this.categoriaActual,
        busqueda: this.terminoBusqueda
      }
    });
  }
}
