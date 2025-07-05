import { Routes } from '@angular/router';
import { Productos } from './paginas/productos/productos';
import { Contacto } from './paginas/contacto/contacto';
import { Principal } from './paginas/principal/principal';
import { Footer } from './paginas/footer/footer';
import { Cabecera } from './paginas/cabecera/cabecera';
import { App } from './app';    

export const routes: Routes = [
    { path: '', component: Principal }, // Ruta para el componente principal
    {path: 'productos', component: Productos},
    {path: 'contacto', component: Contacto},
    {path: 'footer', component: Footer},
    {path: 'cabecera', component: Cabecera},
    { path: '**', redirectTo: '' }
];
