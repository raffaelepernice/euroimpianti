import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  sliderImages = [
    { url: 'assets/images/slider1.png', alt: 'Immagine 1' },
    { url: 'assets/images/slider2.png', alt: 'Immagine 2' },
    { url: 'assets/images/slider3.png', alt: 'Immagine 3' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  products = [
    { id: 1, name: 'Prodotto 1', image: 'assets/images/prod1.jpg', description: 'Descrizione prodotto 1' },
    { id: 2, name: 'Prodotto 2', image: 'assets/images/prod2.jpg', description: 'Descrizione prodotto 2' },
    { id: 3, name: 'Prodotto 3', image: 'assets/images/prod3.jpg', description: 'Descrizione prodotto 3' },
    { id: 4, name: 'Prodotto 4', image: 'assets/images/prod4.jpg', description: 'Descrizione prodotto 4' },
    { id: 5, name: 'Prodotto 5', image: 'assets/images/prod5.jpg', description: 'Descrizione prodotto 5' },
    { id: 6, name: 'Prodotto 6', image: 'assets/images/prod6.jpg', description: 'Descrizione prodotto 6' },
    { id: 7, name: 'Prodotto 7', image: 'assets/images/prod7.jpg', description: 'Descrizione prodotto 7' },
    { id: 8, name: 'Prodotto 8', image: 'assets/images/prod8.jpg', description: 'Descrizione prodotto 8' },
    { id: 9, name: 'Prodotto 9', image: 'assets/images/prod9.jpg', description: 'Descrizione prodotto 9' },
    { id: 10, name: 'Prodotto 10', image: 'assets/images/prod10.jpg', description: 'Descrizione prodotto 10' },
    { id: 11, name: 'Prodotto 11', image: 'assets/images/prod11.jpg', description: 'Descrizione prodotto 11' },
    { id: 12, name: 'Prodotto 12', image: 'assets/images/prod12.jpg', description: 'Descrizione prodotto 12' }
  ];
}
