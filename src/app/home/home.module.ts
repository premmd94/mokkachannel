import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent
  ],
  imports: [
  CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ],
  entryComponents: [VideoComponent]
})
export class HomeModule { }
