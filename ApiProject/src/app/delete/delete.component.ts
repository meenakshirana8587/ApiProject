import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
productDetail: FormGroup;
items$:Observable<Product[]>;
  constructor(private appservice: AppService , private route: ActivatedRoute) { 
    
  }
  product: any;
  ngOnInit(): void {
    let id= this.route.snapshot.params['id'];
    console.log(id);
    this.appservice.getproductById(id).subscribe(u=>{
      console.log(u);
      this.product= u;
    })

  }
  submit()
  {
    //this.items$= this.appservice.getproductById(this.productDetail.controls['id'].value);
    
  }
  edit()
  {
    this.appservice.getproductById(this.productDetail.controls['id'].value)
     let product: Product=  {...this.productDetail.value};
    this.appservice.putProduct(product).subscribe(
      
    );
  }

}
