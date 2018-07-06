import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselang',
  templateUrl: './carouselang.component.html',
  styleUrls: ['./carouselang.component.css']
})
export class CarouselangComponent implements OnInit {

  images: Array<string> = [
    "assets/img/wp1.jpg",
    "assets/img/wp7.jpg",
    "assets/img/wp8.jpg",
    "assets/img/wp9.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
