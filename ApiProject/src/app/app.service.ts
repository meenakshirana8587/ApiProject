import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './Product';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private handleError(error: any)
  {
    console.log(error);
    return throwError(error);
  }
  getProducts(): Observable<Product[]>
  {
    const apiurl= environment.apibaseurl+ "Product/items";
    const headers= {'content-type':'application/json'};
      return this.http.get<Product[]>(apiurl,{'headers': headers});
  }
  addProduct(item:Product): Observable<Product>
  {
    const apiurl= "https://localhost:44391/api/product/items";
    const headers= {'content-type':'application/json', 'accept': 'application/json'};
    console.log(apiurl);
    Object.defineProperty(item,'id',{'enumerable':false});
    const itemToAdd= JSON.stringify(item);
    console.log(itemToAdd);
      return this.http.post<Product>(apiurl,itemToAdd,{'headers': headers}).pipe(
        tap((item:any)=>{console.log(item)}),
        catchError(this.handleError)
        
      );
  }
  putProduct(product: Product): Observable<Product>
  {
    const apiurl= "https://localhost:44391/api/product/items/"+product.id;
    const headers= {'content-type':'application/json'};
    const productToUpdate = JSON.stringify(product);
    return this.http.put<Product>(apiurl,productToUpdate, {headers:headers})
    .pipe(
      catchError(error =>this.handleError(error))
    );
  }


  
  
  deleteProduct(product: Product): Observable<Product>{
    const apiurl=  "https://localhost:44391/api/product/items/"+product.id;
    const headers = {'content-type' : 'application/json'};
   // const taskDto = JSON.stringify(product);
    return this.http.delete<Product>(apiurl, {'headers':headers})
    .pipe(
      catchError(error =>this.handleError(error))
    );
  }

  getproductById(id: number)
  {
      const apiurl=  "https://localhost:44391/api/product/items/"+id;
      const headers= {'content-type':'application/json'}; 
      return this.http.get(apiurl ,{'headers': headers}).pipe(
        catchError(error =>this.handleError(error))
      );  
     
  }

}



