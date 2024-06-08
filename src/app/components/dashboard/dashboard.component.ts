import { Component, OnInit, inject } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from '../carousel/carousel.component';
import { VehicleService } from '../../service/vehicle.service';
import { Storage, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';

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
export class DashboardComponent implements OnInit{
  date!: string;
  file!: File;
  fileName! : string;
  timeslot: string[] = ['4:00', '5:00'];

  vehicleService = inject(VehicleService)
  private readonly _storage = inject(Storage)

  ngOnInit(): void {
    console.log(this._storage);
    this.vehicleService.getVehicles().subscribe(vehicles => {
      console.log(vehicles);
    })
  }

  async uploadFile():Promise<void>{
    const storageRef = ref(this._storage,`Vehicles/${this.file.name}`);
    await uploadBytes(storageRef,this.file);
    this.fileName = `Vehicles/${this.file.name}`
  }
}
