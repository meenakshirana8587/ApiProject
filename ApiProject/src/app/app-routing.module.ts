import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AsyncComponent } from './async/async.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { RemoveComponent } from './remove/remove.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'product/:id', component:DeleteComponent,
children:[{path: 'updateproduct', component: UpdateComponent},
{path:'deleteproduct', component: RemoveComponent},]
  },

  { path: 'addproduct', component: AddProductComponent },
  { path: 'update', component: UpdateComponent },
  {path:'delete', component: RemoveComponent},
  
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
