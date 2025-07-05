import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Principal } from "./paginas/principal/principal";
import { NgFor, NgIf } from '@angular/common';
import { Cabecera } from "./paginas/cabecera/cabecera";
import { Footer } from "./paginas/footer/footer";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Principal, NgFor, NgIf, Cabecera, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AppProductos';
}
