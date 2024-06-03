import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[painter]'
})


export class BackgroundColor implements OnInit {
    
    
    constructor( private element: ElementRef, private renderer : Renderer2){}
    
    
    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor', 'rgb(0, 0, 0)')
    }
}