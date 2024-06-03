import { Component } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list:any

  constructor(private products: ProductlistService){}

  ngOnInit(){
    this.products.produqtebi$.subscribe((data: any)=>{
      this.list = data
    })
  }

  imager(item:any){
    return '/assets/images/'+item.img
  }

}
