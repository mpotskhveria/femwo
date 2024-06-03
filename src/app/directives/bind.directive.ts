import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBind]'
})
export class BindDirective {

  constructor( private element : ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.fontSize') font: string = '1.5rem';

  @HostListener('mouseenter') testOver(){
    this.renderer.addClass(this.element.nativeElement, 'enlarge')
  }
  @HostListener('mouseout') testOut(){
    this.renderer.removeClass(this.element.nativeElement, 'enlarge')
  }

}
