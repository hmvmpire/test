import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() vehicle: Vehicle
  
  constructor() { }

  ngOnInit(): void {
  }

}
