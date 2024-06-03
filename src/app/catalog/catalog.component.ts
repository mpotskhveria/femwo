import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../home/product';
import { ProductlistService } from '../services/productlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})



export class CatalogComponent {

 saqoneli!: any
 @Input() filterLogic : string = ''
 
 constructor(private prodlist: ProductlistService){}
  imager(item:any){
    return '/assets/images/'+item.img
  }

  boughtProducts: Product[] = []

  select(product:Product ){
    this.boughtProducts.push(product)
  }

  @ViewChild('order') requestOrder!: ElementRef;


  loger(){
    console.log(this.requestOrder.nativeElement.value)
  }


  ngOnInit(){
    
    this.prodlist.produqtebi$.subscribe((data: any)=>{
      this.saqoneli = data
    })


  }

  saxeli = ''
  kodi = ''

  signIn(user:string, paroli: string){
    this.prodlist.login(user, paroli).subscribe({
      next(data){console.log(data)},
      error(err){console.log(err.message)}
    })

    this.saxeli=''
    this.kodi=''
  }

  maxRating:number = 5
  decimal:number = 2

}
