import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonService, ICarClassFare } from '../../service/common.service'
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  products: ICarClassFare[] = []
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

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.products = this.commonService.customCarouselCards;
  }
}
