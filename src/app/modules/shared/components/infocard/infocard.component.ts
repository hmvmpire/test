import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {
  @Input() title: string
  @Input() imgUrl: string
  constructor() { }
  ngOnInit(): void {
  }

}
