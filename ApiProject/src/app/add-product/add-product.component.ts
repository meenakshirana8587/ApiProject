import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';
import {switchMap} from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
items$:Observable<Product[]>;
addForm: FormGroup;
  constructor(private appservice: AppService, private fb: FormBuilder, private router: Router) { 
    //this.items$= new Observable<Product[]>();
    this.addForm= this.fb.group({
      title:[null,[Validators.required]],

      price: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      color: ['',[Validators.required]],
      expDate: ['',[Validators.required]],
      inStock: ['',[Validators.required]]
    });
  }
  //task: string;

  ngOnInit(): void {
    this.items$= this.appservice.getProducts();
  }
  // addProductItem()
  // {
  //   let itemToAdd={
  //     Id:99,
  //     Title:this.task,
  //     InStock:false,
  //     Price:300,
  //     Quantity:40,
  //     ExpDate:"30-12-2020",
  //     Color:"red"
  //   }
    // this.items$= this.appservice.addProduct(itemToAdd).pipe(
    //   switchMap(data=>{return this.appservice.getProducts();})
    // )
  //}
  submit()
  {
    let product: Product=  {...this.addForm.value};
    // console.log(product);
    product.id=-1;
    // console.log(this.addForm.value);
    this.appservice.addProduct(product).subscribe();
    this.router.navigate(['/home']);
    
  }

}


