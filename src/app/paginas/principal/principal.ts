import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterOutlet, RouterOutlet, RouterLink, Principal],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
