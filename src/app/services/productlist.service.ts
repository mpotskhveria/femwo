import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../home/product';
import { Observable, Subject, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  
   link = 'https://dummyjson.com/auth/login'

  private subject = new Subject<any>()
  produqtebi$ = this.subject.asObservable()

  constructor( private http: HttpClient ) {}

  getProducts(){
    return this.http.get<any>('https://dummyjson.com/products').pipe(
      map((response)=>{
        if(response){
          return response.products.map((product:any)=>{
            return {...product, title: product.title.toUpperCase()}
          })
        }
      }),
      // tap((response)=>{
      //   response.forEach((i:any)=>{
      //     console.log(i)
      //   })
      // })
    ).subscribe({
      next: (data) => {this.subject.next(data)},
      error: (err) => {this.subject.error(err)}
    })
  }

  login(user: string, psw: string | number) :Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const body = {
      username: user,
      password: psw
    }

    return this.http.post<any>(this.link, body, {headers})
  }

  
  // productsArray$ = new Observable((observer)=>{
  //   observer.next(this.products)
  // })

  getInfo:EventEmitter<Product> = new EventEmitter<Product>()

  showInfo(item:Product){
    this.getInfo.emit(item)
  }
  
  
}
