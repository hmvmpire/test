import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/card/card.component';
import {InfocardComponent} from './components/infocard/infocard.component';
import { FullCardComponent } from './components/full-card/full-card.component'


@NgModule({
  declarations: [CarCardComponent, InfocardComponent, FullCardComponent],
  imports: [
    CommonModule
  ],
  exports:[CarCardComponent,FullCardComponent, InfocardComponent]
})
export class SharedModule { }
