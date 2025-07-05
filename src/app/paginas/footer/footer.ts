import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgIf, NgFor, HttpClientModule, FormsModule, RouterOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
