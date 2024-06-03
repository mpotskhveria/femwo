import { Component } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  itemId!: number
  item: any

  constructor(private things : ProductlistService, private activeLik: ActivatedRoute){}

  ngOnInit(){
    // this.itemID = +this.activeLik.snapshot.params['id']
    // this.activeLik.params.subscribe((data:any)=>{
    //   this.itemId = +data['id']
    //   this.item = this.things.getProducts().find((product: any) => product.id === this.itemId)
    // })

    
  }

  imager(item:any){
    return '/assets/images/'+item.img
  }
}
