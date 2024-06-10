import { Component, OnInit, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonService } from '../../service/common.service'
import { TagModule } from 'primeng/tag';
import { Vehicles } from '../../vehicle.interface';
import { VehicleService } from '../../service/vehicle.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  products: Vehicles[] = []
  responsiveOptions: any[] | undefined = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '568px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  vehicleService = inject(VehicleService)
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.products = this.commonService.customCarouselCards;
    // this.vehicleService.getVehicles().subscribe(vehicles => {
    //   console.log(vehicles);
    //   this.products = vehicles;
    // })
  }
}
