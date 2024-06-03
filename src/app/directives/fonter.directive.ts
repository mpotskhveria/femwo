import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[fonter]'
})

export class Fonter implements OnInit {
    private element: ElementRef
    
    constructor(item: ElementRef){
        this.element = item
    }

    ngOnInit(){
        this.element.nativeElement.style.fontSize = '1.5rem'
    }

}