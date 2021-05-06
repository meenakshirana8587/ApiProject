import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Observable<Product[]>;
  productsubscription: Subscription;
 
  constructor(private appService: AppService) {
    
    this.products= new Observable<Product[]>();
  }

  ngOnInit(): void {
    this.products= this.appService.getProducts();
      
  }
  ngOnDestroy()
  {
    // if(this.productsubscription)
    // {
    //   this.productsubscription.unsubscribe();
    // }
  }
  showingSubscribe: boolean= true;
  showingAsync: boolean= false;
  showingMaterialTable: boolean= false;
  showSubscribe()
  {
  this.showingSubscribe= true;
  this.showingAsync= false;
  this.showingMaterialTable= false;

  }
  showAsync()
  {
    this.showingSubscribe= false;
  this.showingAsync= true;
  this.showingMaterialTable= false;

  }
  showMatTable()
  {
    this.showingSubscribe= false;
  this.showingAsync= false;
  this.showingMaterialTable= true;

  }


}
