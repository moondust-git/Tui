// todo: add animation

/***
 * pause (not yet supported) (?string='hover') - event group name which pauses the cycling of the carousel, if hover pauses on mouseenter and resumes on mouseleave
 keyboard (not yet supported) (?boolean=true) - if false carousel will not react to keyboard events
 note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */

import {Component, Input, OnDestroy, Output, EventEmitter} from '@angular/core';

import {TSlideComponent} from './slide.component';
import {CarouselConfig} from './carousel.config';
import {isNullOrUndefined} from 'util';

export enum Direction {UNKNOWN, NEXT, PREV}

/**
 * Base element to create carousel
 */
@Component({
  selector: 'Tcarousel',
  template: `
    <div (mouseenter)="pause()" (mouseleave)="play()" (mouseup)="play()" class="carousel slide">
      <ol class="carousel-indicators" *ngIf="slides.length > 1">
        <li *ngFor="let slidez of slides; let i = index;" [class.active]="slidez.isActive === true" (click)="selectSlide(i)"></li>
      </ol>
      <div class="carousel-inner">
        <ng-content></ng-content>
      </div>
      <a class="left carousel-control carousel-control-prev" [class.disabled]="activeSlide === 0 && noWrap" (click)="previousSlide()"
         *ngIf="slides.length > 1">
        <span class="icon-prev carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control carousel-control-next" (click)="nextSlide()" [class.disabled]="isLast(activeSlide) && noWrap"
         *ngIf="slides.length > 1">
        <span class="icon-next carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  `
})
export class TCarouselComponent implements OnDestroy {
  /** If `true` — carousel will not cycle continuously and will have hard stops (prevent looping) */
  @Input() public noWrap: boolean;
  /**  If `true` — will disable pausing on carousel mouse hover */
  @Input() public noPause: boolean;

  protected _currentActiveSlide: number;

  private isSelectiing: Boolean = false;

  /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
  @Output() public activeSlideChange: EventEmitter<any> = new EventEmitter<any>(false);

  /** Index of currently displayed slide(started for 0) */

  @Input()
  public set activeSlide(index: number) {
    if (this._slides.length && index !== this._currentActiveSlide) {
      this._select(index);
    }
  }


  public get activeSlide(): number {
    return this._currentActiveSlide;
  }

  protected _interval: number;

  /**
   * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
   */
  @Input()
  public get interval(): number {
    return this._interval;
  }

  public set interval(value: number) {
    this._interval = value;
    this.restartTimer();
  }

  protected _slides: Array<TSlideComponent> = new Array<TSlideComponent>();
  public get slides(): TSlideComponent[] {
    return this._slides;
  }

  protected currentInterval: any;
  protected isPlaying: boolean;
  protected destroyed: boolean = false;

  public constructor(config: CarouselConfig) {
    Object.assign(this, config);
  }

  public ngOnDestroy(): void {
    this.destroyed = true;
  }

  /**
   * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
   * @param slide
   */
  public addSlide(slide: TSlideComponent): void {
    this._slides.push(slide);
    if (this._slides.length === 1) {
      this._currentActiveSlide = void 0;
      this.activeSlide = 0;
      this.play();
    }
  }

  /**
   * Removes specified slide. If this slide is active - will roll to another slide
   * @param slide
   */
  public removeSlide(slide: TSlideComponent): void {
    const remIndex = this._slides.indexOf(slide);

    if (this._currentActiveSlide === remIndex) {

      // removing of active slide
      let nextSlideIndex: number = void 0;
      if (this._slides.length > 1) {
        // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
        // in case, if this slide in middle of collection, index of next slide is same to removed
        nextSlideIndex = !this.isLast(remIndex) ? remIndex :
          this.noWrap ? remIndex - 1 : 0;
      }
      delete this._slides.filter[remIndex];

      // prevents exception with changing some value after checking
      setTimeout(() => {
        this._select(nextSlideIndex);
      }, 0);
    } else {
      delete this._slides[remIndex];
      const currentSlideIndex = this.getCurrentSlideIndex();
      // after removing, need to actualize index of current active slide
      this._currentActiveSlide = currentSlideIndex;
      this.activeSlideChange.emit(this._currentActiveSlide);
    }
  }

  /**
   * Rolling to next slide
   * @param force: {boolean} if true - will ignore noWrap flag
   */
  public nextSlide(force: boolean = false): void {
    this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
  }

  /**
   * Rolling to previous slide
   * @param force: {boolean} if true - will ignore noWrap flag
   */
  public previousSlide(force: boolean = false): void {
    this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
  }

  /**
   * Rolling to specified slide
   * @param index: {number} index of slide, which must be shown
   */
  public selectSlide(index: number): void {
    this._select(index);
  }


  /**
   * Sets a slide, which specified through index, as active
   * @param index
   * @private
   */
  private _select(index: number): void {
    if (this.isSelectiing) {
      return;
    }
    if (isNaN(index)) {
      this.pause();
      return;
    }
    let i = index - this._currentActiveSlide;
    let currentSlide = this._slides[this._currentActiveSlide];
    let nextSlide = this._slides[index];
    if (isNullOrUndefined(currentSlide)) {
      nextSlide.isActive = true;
      this._currentActiveSlide = index;
      this.activeSlide = index;
    }

    if (!isNullOrUndefined(currentSlide) && !isNullOrUndefined(nextSlide)) {
      this._currentActiveSlide = index;
      this.activeSlide = index;
      this.isSelectiing = true;
      currentSlide.hide(i);
      nextSlide.show(i, () => {
        this.activeSlideChange.emit(index);
        this.isSelectiing = false;
      });
    }
  }


  /**
   * Starts a auto changing of slides
   */
  public play(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }

  /**
   * Stops a auto changing of slides
   */
  public pause(): void {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }

  /**
   * Finds and returns index of currently displayed slide
   * @returns {number}
   */
  public getCurrentSlideIndex(): number {
    return this._currentActiveSlide;
  }

  /**
   * Defines, whether the specified index is last in collection
   * @param index
   * @returns {boolean}
   */
  public isLast(index: number): boolean {
    return index + 1 >= this._slides.length;
  }

  /**
   * Defines next slide index, depending of direction
   * @param direction: Direction(UNKNOWN|PREV|NEXT)
   * @param force: {boolean} if TRUE - will ignore noWrap flag, else will return undefined if next slide require wrapping
   * @returns {any}
   */
  private findNextSlideIndex(direction: Direction, force: boolean): number {
    let nextSlideIndex: number = 0;

    if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
      return void 0;
    }

    switch (direction) {
      case Direction.NEXT:
        // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
        nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
          (!force && this.noWrap ) ? this._currentActiveSlide : 0;
        break;
      case Direction.PREV:
        // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
        nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
          (!force && this.noWrap ) ? this._currentActiveSlide : this._slides.length - 1;
        break;
      default:
        throw new Error('Unknown direction');
    }
    return nextSlideIndex;
  }


  /**
   * Starts loop of auto changing of slides
   */
  private restartTimer(): any {
    this.resetTimer();
    let interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = setInterval(
        () => {
          let nInterval = +this.interval;
          if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
            this.nextSlide();
          } else {
            this.pause();
          }
        },
        interval);
    }
  }

  /**
   * Stops loop of auto changing of slides
   */
  private resetTimer(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = void 0;
    }
  }
}
