import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    CarouselModule,
    CarouselComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  date!: string;
  timeslot: string[] = ['4:00', '5:00']
}
