import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscribeComponent implements OnInit,OnDestroy, OnChanges {
  title = 'prodcrudapidata';
  @Input() products:Observable<Product[]>;
  productsubscription: Subscription;
   productItem: Product[]=[];
 
  constructor(private cd: ChangeDetectorRef) {
    this.productsubscription= new Subscription();
    this.products= new Observable<Product[]>();
  }
  ngOnInit()
  {
    
    this.productsubscription= this.products.subscribe(data=>
        {this.productItem= data
        this.cd.markForCheck();});
     
      
      
  }

  ngOnChanges(): void {
    
  }
  
  ngOnDestroy()
  {
    
  }

}
