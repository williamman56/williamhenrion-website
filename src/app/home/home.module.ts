import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
