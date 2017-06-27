import {Component, HostBinding, OnDestroy, Input, OnInit, Renderer2, ElementRef} from '@angular/core';

import {TCarouselComponent} from './carousel.component';

@Component({
  selector: 'Tcarousel-slide',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    'class': 'carousel-item'
  }
})
export class TSlideComponent implements OnInit, OnDestroy {
  /** Is current slide active */
  @HostBinding('class.active')
  @Input() public isActive: boolean = false;


  protected carousel: TCarouselComponent;

  public constructor(carousel: TCarouselComponent, private renderer: Renderer2, private eleRef: ElementRef) {
    this.carousel = carousel;
  }

  public hide(i: number) {
    console.log('show');
    let classAni = i > 0 ? 'carousel-item-left' : 'carousel-item-right';
    this.renderer.addClass(this.eleRef.nativeElement, classAni);
    setTimeout(() => {
      this.renderer.removeClass(this.eleRef.nativeElement, classAni);
      this.isActive = false
    }, 600)
  }

  public show(i: number) {
    console.log('show');
    let classAni = i < 0 ? 'carousel-item-right' : 'carousel-item-left';
    let classAniP = i < 0 ? 'carousel-item-prev' : 'carousel-item-next';
    this.renderer.addClass(this.eleRef.nativeElement, classAniP);
    setTimeout(() => {
      this.renderer.addClass(this.eleRef.nativeElement, classAni);
    }, 0.1)
    setTimeout(() => {
      this.renderer.removeClass(this.eleRef.nativeElement, classAniP);
      this.renderer.removeClass(this.eleRef.nativeElement, classAni);
      this.isActive = true
    }, 599);
  };

  /** Fires changes in container collection after adding a new slide instance */
  public ngOnInit(): void {
    this.carousel.addSlide(this);
  }

  /** Fires changes in container collection after removing of this slide instance */
  public ngOnDestroy(): void {
    this.carousel.removeSlide(this);
  }
}
