import { Vehicle } from './../../../../interfaces/vehicle';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CarApi } from 'src/app/api/base/cars.api';
import { MockCarApi } from 'src/app/api/mock-api/mock-car.api';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {



  constructor(private carApi: MockCarApi) { }

  vehicles: Observable<Vehicle[]>

  ngOnInit(): void {
    this.vehicles = this.carApi.getSearchResult('something testing')
  }

  customOptions: OwlOptions = {
   loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 20,
    navSpeed: 700,
    navText: ['', ''],
    items: 6,

    responsive: {
      150: { items: 8 },
      110: { items: 7 },
      1150: { items: 6 },
      610: { items: 5 },
      530: { items: 4, margin: 5 },
      390: { items: 3, margin: 5 },
      230: { items: 2, margin: 4 },
      1: { items: 1 },
    },
    nav: true,
  }

}
