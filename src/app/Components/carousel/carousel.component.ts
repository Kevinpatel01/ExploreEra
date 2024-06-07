import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { src: 'https://www.thoughtco.com/thmb/-e3kdjnSIv5XeHuXgY-x_dFOKXs=/2097x1430/filters:no_upscale():max_bytes(150000):strip_icc()/the-roman-coliseum-in-the-early-morning-655490208-5a750519875db90037324138.jpg', alt: 'Image 2' },
    { src: 'https://th.bing.com/th/id/OIP.nIAVRm5piGE5fitTTPnkVwHaE8?rs=1&pid=ImgDetMain', alt: 'Image 1' },
    { src: 'https://style-review.com/images/easyblog_articles/2256/b2ap3_large_Universal-Studio.jpg', alt: 'Image 3' }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }
}
