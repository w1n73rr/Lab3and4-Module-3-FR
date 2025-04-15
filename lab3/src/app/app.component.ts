import { Component } from '@angular/core';
import { Route, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { ItalicDirective } from './core/directive/italic.directive';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, RouterLinkActive, RouterModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
}
