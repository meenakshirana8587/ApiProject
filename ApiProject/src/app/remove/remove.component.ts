import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  deleteform : FormGroup;
  constructor(private fb :FormBuilder, private myservice: AppService, private router: Router) { 
  this.deleteform = this.fb.group({
    id :[Validators.required]
  });
}
  ngOnInit(): void {
  }
  submit()
  {
    let product: Product={...this.deleteform.value};
    this.myservice.deleteProduct(product).subscribe();
    this.router.navigate(['/home']);
  }
}
