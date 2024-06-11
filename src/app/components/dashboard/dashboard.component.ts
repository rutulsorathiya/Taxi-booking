import { Component, OnInit, inject } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from '../carousel/carousel.component';
import { VehicleService } from '../../service/vehicle.service';
import { FirebaseStorage, Storage, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { LocationIqService } from '../../service/location-iq.service';

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
  fromText: string | undefined;
  fromTextUpdate= new Subject<string>();
  toText:string|undefined;
  toTextUpdate= new Subject<string>();
  

  vehicleService = inject(VehicleService)
  private readonly _storage = inject(Storage)

  constructor(private _locationIqService: LocationIqService ){
    this.fromTextUpdate.pipe(
      debounceTime(2000),
      distinctUntilChanged())
      .subscribe(value => {
        console.log("From here",value);
      });

      this.toTextUpdate.pipe(
        debounceTime(2000),
        distinctUntilChanged()).subscribe(value =>{
          console.log("To here",value)
        });
  }
  

  ngOnInit(): void {
    // console.log(this._storage);
    // this.vehicleService.getVehicles().subscribe(vehicles => {
    //   console.log(vehicles);
    // })
    this._locationIqService.autoComplete("vastra").subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (err) => {
        console.log("CompanyComponent ~ this._apiService.getCompany ~ err:", err)
      }
    });

  }

  // async uploadFile():Promise<void>{
  //   const storageRef = ref(this._storage,`Vehicles/${this.file.name}`);
  //   const snap = await uploadBytes(storageRef,this.file);
  //   this.fileName = `Vehicles/${this.file.name}`
  // }
}
