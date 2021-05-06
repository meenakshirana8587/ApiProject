import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../Product';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private appservice: AppService) { }

  ngOnInit(): void {
    this.updateForm= this.fb.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      color: ['',[Validators.required]],
      expDate:['',[Validators.required]],
      inStock: ['',[Validators.required]]
    })
  
  }
  submit()
  {
      this.appservice.getproductById(this.updateForm.controls['id'].value)
     let product: Product=  {...this.updateForm.value};
    this.appservice.putProduct(product).subscribe(
      
    );
    this.router.navigate(['/home']);
  }

}
