import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListener]'
})


export class ListenerDirective {

  constructor(private item : ElementRef, private renderer : Renderer2 ) { }


  @HostListener('mouseenter') testOver(){
    this.renderer.addClass(this.item.nativeElement, 'enlarge')
  }
  @HostListener('mouseout') testOut(){
    this.renderer.removeClass(this.item.nativeElement, 'enlarge')
  }


}
