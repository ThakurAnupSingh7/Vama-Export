import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMasterComponent } from './item-master/item-master.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FinishingComponent } from './finishing/finishing.component';
import { CostingComponent } from './costing/costing.component';


const routes: Routes = [
   {path:'', pathMatch:'full', redirectTo:'item-master'},
  {path:'item-master', component:ItemMasterComponent},
  {path:'assembly', component:AssemblyComponent},
  {path:'product-details', component:ProductDetailsComponent},
  {path:'finishing', component:FinishingComponent},
  {path:'costing', component:CostingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
