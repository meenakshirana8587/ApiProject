import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  

  @Input() products:Observable<Product[]>;
  updateurl= "updateproduct";
  deleteurl="deleteproduct";
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
  displayedColumns: string[] = ['id', 'title', 'price', 'quantity','color','expDate','inStock','edit','delete'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  

}
