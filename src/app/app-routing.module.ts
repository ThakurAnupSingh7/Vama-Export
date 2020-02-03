import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FinishingComponent } from './finishing/finishing.component';
import { CostingComponent } from './costing/costing.component';
import { ProductSimulationComponent } from './product-simulation/product-simulation.component';
import { PurchagingOrderComponent } from './purchaging-order/purchaging-order.component';
import { SellingOrderComponent } from './selling-order/selling-order.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AuthGuard } from './Service/auth.guard';


const routes: Routes = [
   {path:'', pathMatch:'full', redirectTo:'login'},
  {
    path:'item-master',
   component:ItemMasterComponent,
   canActivate: [AuthGuard]
},
  {path:'product-simulation', component:ProductSimulationComponent},
  {path:'product-details', component:ProductDetailsComponent},
  {path:'finishing', component:FinishingComponent},
  {path:'costing', component:CostingComponent},
   {path:'purchaging-order', component:PurchagingOrderComponent},
  {path:'selling-order', component:SellingOrderComponent},
  {path:'login', component:LoginComponent},
 {path:'register', component:RegistrationComponent},
 {path:'more-info', component:MoreInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
