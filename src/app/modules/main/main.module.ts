

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { LogoCarousselComponent } from './components/logo-caroussel/logo-caroussel.component';
import { SharedModule } from '../shared/shared.module';
import { ModelsliderComponent } from './components/modelslider/modelslider.component';
import { MockCarApi } from 'src/app/api/mock-api/mock-car.api';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [ HomeComponent,SearchResultComponent, LogoCarousselComponent, ModelsliderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    MainRoutingModule,
    
  ],
  providers:[MockCarApi]
})
export class MainModule { }
