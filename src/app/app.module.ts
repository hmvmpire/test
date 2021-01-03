import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
