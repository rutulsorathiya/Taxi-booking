import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule, NgFor, NgIf} from "@angular/common";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CalendarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  date!:string;
}
