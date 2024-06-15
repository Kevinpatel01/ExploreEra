import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { src: 'https://www.thoughtco.com/thmb/-e3kdjnSIv5XeHuXgY-x_dFOKXs=/2097x1430/filters:no_upscale():max_bytes(150000):strip_icc()/the-roman-coliseum-in-the-early-morning-655490208-5a750519875db90037324138.jpg', alt: 'Image 2' },
    { src: 'https://i.redd.it/uh4avmjjjq531.jpg', alt: 'Image 1' },
    { src: 'https://th.bing.com/th/id/R.c67dc09a49c6b81633af95442126ffda?rik=R8nK7JjKNrNz7Q&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f2%2f29%2fRuins_of_Pompeii_with_the_Vesuvius.jpg&ehk=Lxf2Mxk9x5yGSR%2flUzLg3pXn6R%2b5UUzqbaIaWNkZHBI%3d&risl=1&pid=ImgRaw&r=0', alt: 'Image 3' }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void{
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }
}
