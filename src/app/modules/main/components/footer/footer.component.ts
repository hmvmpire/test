import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockCarApi } from 'src/app/api/mock-api/mock-car.api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private carApi: MockCarApi) { }

  links: Observable<String[]>

  ngOnInit(): void {
    this.links = this.carApi.getFooterLinks('something testing')
  }
}
