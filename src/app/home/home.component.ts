import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { NgImageSliderComponent, NgImageSliderModule } from 'ng-image-slider';
import { TranslateModule } from '@ngx-translate/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, NgImageSliderModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
 
  customOptions: OwlOptions;
  dynamicSlides = [
    {
      id: '1',
      src: 'assets/Home/Iphone.png',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: '2',
      src: 'assets/Home/speaker.png',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: '3',
      src: 'assets/Home/Iphone.png',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: '4',
      src: 'assets/Home/speaker.png',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: '5',
      src: 'assets/Home/Iphone.png',
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];

  constructor() {
    // Set the target date to 3 days from now
    this.targetDate.setDate(this.targetDate.getDate() + 4);
    this.targetTime = this.targetDate.getTime();
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 200,
      autoplay: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        760: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
      nav: true,
    };
  }

  date: any;
  now: any;
  targetDate: any = new Date();
  targetTime: any;
  difference?: number;

  @ViewChild('days', { static: true }) days?: ElementRef;
  @ViewChild('hours', { static: true }) hours?: ElementRef;
  @ViewChild('minutes', { static: true }) minutes?: ElementRef;
  @ViewChild('seconds', { static: true }) seconds?: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      const gifImage = document.createElement('img');
      gifImage.src = 'https://i.gifer.com/VAyR.gif';
      gifImage.onload = () => {
        if (!isNaN(this.days!.nativeElement.innerText)) {
          this.days!.nativeElement.innerText = this.addLeadingZero(
            Math.floor(this.difference!)
          );
        } else {
          this.days!.nativeElement.innerHTML = ''; // Clear previous content if any
          gifImage.style.width = '25px'; // Adjust width as needed
          gifImage.style.height = '25px'; // Adjust height as needed
          this.days!.nativeElement.appendChild(gifImage);
        }
      };
    }, 1000);

    const swiper = new Swiper('.swiper', {
      // Swiper options
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      }
    });
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days!.nativeElement.innerText = this.addLeadingZero(
      Math.floor(this.difference!)
    );
    this.hours!.nativeElement.innerText = this.addLeadingZero(
      23 - this.date.getHours()
    );
    this.minutes!.nativeElement.innerText = this.addLeadingZero(
      59 - this.date.getMinutes()
    );
    this.seconds!.nativeElement.innerText = this.addLeadingZero(
      59 - this.date.getSeconds()
    );
  }

  addLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  imageObject = [
    {
      image: 'assets/Home/joystick.png',
      thumbImage: 'assets/Home/joystick.png',
    },
    {
      image: 'assets/Home/pc.png',
      thumbImage: 'assets/Home/pc.png',
    },
    {
      image: 'assets/Home/chair.png',
      thumbImage: 'assets/Home/chair.png',
    },
    {
      image: 'assets/Home/keyboard.png',
      thumbImage: 'assets/Home/keyboard.png',
    },
    {
      image: 'assets/Home/chair.png',
      thumbImage: 'assets/Home/joystick.png',
    },
    {
      image: 'assets/Home/joystick.png',
      thumbImage: 'assets/Home/pc.png',
    },
    {
      image: 'assets/Home/joystick.png',
      thumbImage: 'assets/Home/joystick.png',
    },
    {
      image: 'assets/Home/pc.png',
      thumbImage: 'assets/Home/pc.png',
    },
    {
      image: 'assets/Home/chair.png',
      thumbImage: 'assets/Home/chair.png',
    },
    {
      image: 'assets/Home/keyboard.png',
      thumbImage: 'assets/Home/keyboard.png',
    },
    {
      image: 'assets/Home/chair.png',
      thumbImage: 'assets/Home/joystick.png',
    },
    {
      image: 'assets/Home/joystick.png',
      thumbImage: 'assets/Home/pc.png',
    },
  ];

  @ViewChild('nav') slider?: NgImageSliderComponent;

  moveNext() {
    this.slider!.next();
  }

  movePrev() {
    this.slider!.prev();
  }
}
