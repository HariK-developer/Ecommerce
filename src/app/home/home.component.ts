import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { TranslateModule } from '@ngx-translate/core';
import { NgxStarsModule } from 'ngx-stars';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, NgImageSliderModule, TranslateModule,NgxStarsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  customOptions: OwlOptions;
  todayOptions: OwlOptions;
  dynamicSlides = [
    {
      id: '1',
      src: 'assets/Home/Iphone.png',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: '2',
      src: 'assets/Home/Iphone.png',
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
      src: 'assets/Home/Iphone.png',
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

  today_sales = [
    {
      id: '1',
      src: 'assets/Home/joystick.png',
      alt: 'Side 1',
      title: 'Side 1',
      height: "152" ,
      width: "172",
      rating: 4.5,
    },
    {
      id: '2',
      src: 'assets/Home/keyboard.png',
      alt: 'Side 2',
      title: 'Side 2',
      height: "101" ,
      width: "191",
      rating: 4,
    },
    {
      id: '3',
      src: 'assets/Home/chair.png',
      alt: 'Side 3',
      title: 'Side 3',
      height: "180" ,
      width: "107",
      rating: 3.5,
    },
    {
      id: '4',
      src: 'assets/Home/pc.png',
      alt: 'Side 4',
      title: 'Side 4',
      height: "129" ,
      width: "170",
      rating: 4.5,
    },
    {
      id: '5',
      src: 'assets/Home/chair.png',
      alt: 'Side 5',
      title: 'Side 5',
      height: "180" ,
      width: "107",
      rating: 3.5,
    },
    {
      id: '6',
      src: 'assets/Home/pc.png',
      alt: 'Side 5',
      title: 'Side 5',
      height: "129" ,
      width: "170",
      rating: 4.5,
    },
    {
      id: '7',
      src: 'assets/Home/chair.png',
      alt: 'Side 5',
      title: 'Side 5',
      height: "180" ,
      width: "107",
      rating: 5,
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
    };

    this.todayOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 400,
      margin: 150,
      autoplay: false,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        760: {
          items: 2,
        },
        1000: {
          items: 5,
        },
      },
      
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

}
