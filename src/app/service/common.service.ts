import { Injectable } from '@angular/core';

export interface ICarClassFare {
  image: string
  title: string
  rate: number
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  phoneNumber: string = "+91 7988979889";
  customCarouselCards: ICarClassFare[] = [
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Van.svg",
      title: "Van",
      description: "We provide taxi services, but we also provide transportation",
      rate: 6.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Econom.svg",
      title: "Econom",
      description: "We provide taxi services, but we also provide transportation",
      rate: 3.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Business.svg",
      title: "Business",
      description: "We provide taxi services, but we also provide transportation",
      rate: 2.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/SUV.svg",
      title: "SUV",
      description: "We provide taxi services, but we also provide transportation",
      rate: 1.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Van.svg",
      title: "Van",
      description: "We provide taxi services, but we also provide transportation",
      rate: 6.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Econom.svg",
      title: "Econom",
      description: "We provide taxi services, but we also provide transportation",
      rate: 3.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/Business.svg",
      title: "Business",
      description: "We provide taxi services, but we also provide transportation",
      rate: 2.5
    },
    {
      image: "https://ld-wp73.template-help.com/wordpress/prod_26760/v2/wp-content/uploads/2019/11/SUV.svg",
      title: "SUV",
      description: "We provide taxi services, but we also provide transportation",
      rate: 1.5
    }
  ]
}
