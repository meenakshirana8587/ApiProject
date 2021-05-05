import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../Product';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent implements OnInit {
  @Input() items$: Observable<Product[]>
  
  constructor() {
    this.items$= new Observable<Product[]>();
   }

  ngOnInit(): void {
    //this.items$= this.appService.getProducts();
  }

}
