import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent implements OnInit {

  @Input() vehicle: Vehicle
  
  constructor() { }

  ngOnInit(): void {
  }

}
