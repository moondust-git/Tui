import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TCarouselComponent} from './carousel.component';
import {TSlideComponent} from './slide.component';
import {CarouselConfig} from './carousel.config';
/**
 * Created by tc949 on 2017/6/27.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TCarouselComponent, TSlideComponent],
  exports: [TCarouselComponent, TSlideComponent],
  providers: [CarouselConfig]
})
export class TCarouselModule {
}
