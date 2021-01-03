import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { MockCarApi } from 'src/app/api/mock-api/mock-car.api';
import { Vehicle } from 'src/app/interfaces/vehicle';

@Component({
  selector: 'app-modelslider',
  templateUrl: './modelslider.component.html',
  styleUrls: ['./modelslider.component.scss']
})
export class ModelsliderComponent implements OnInit {


  @Input() title: string
  constructor(private carApi: MockCarApi) { }

  vehicles: Observable<Vehicle[]>

  ngOnInit(): void {
    this.vehicles = this.carApi.getCars('something testing')
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 60,
    navSpeed: 700,
    navText: ['', ''],
    items: 4,
        
        
    nav: false
  }

}
