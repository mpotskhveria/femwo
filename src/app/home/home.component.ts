import { Component, ViewChild } from '@angular/core';
import { Product as item } from './product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ProductlistService } from '../services/productlist.service';
import { BehaviorSubject, Observable, Subject, delay, fromEvent, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  testCvladi: number = 4

  products!: item[]

  constructor ( private prodservice: ProductlistService, private activeRoute: ActivatedRoute) {
    
  }

  

  allProducts(){
    return this.products.length
  }

  foodProducts(){
    return this.products.filter(item => item.category === 'food').length
  }
  
  oilProducts(){
    return this.products.filter(item => item.category === 'oil').length
  }

  tecProducts(){
    return this.products.filter(item => item.category === 'tec').length
  }

  selectedChange: string = 'all'

  parentFilter(data: string){
    this.selectedChange = data
  }


  

  
  ngOnInit(){
    this.prodservice.getProducts()

    this.prodservice.produqtebi$.subscribe((data: any)=>{
      this.products = data
    })

    this.activeRoute.fragment.subscribe((data)=>{
      this.scroller(data)
    })

    // let obs$ = new Observable<number>((observer)=>{ observer.next(Math.random()) })
    // const subject = new BehaviorSubject<any>(1)

    // subject.subscribe({
    //   next(data){console.log(data)}
    // })

    // subject.subscribe({
    //   next(data){console.log(data)}
    // })

    // subject.next(Math.random())

  }

  scroller(item:any){
    document.getElementById(item)?.scrollIntoView({behavior: 'smooth'})
  }

  observable$: Observable<string> = of('This is async data').pipe( delay(1000) )
}

