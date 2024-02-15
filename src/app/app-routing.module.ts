import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderCupcakeComponent} from "./order-cupcake/order-cupcake.component";
import {ChooseFlavorComponent} from "./choose-flavor/choose-flavor.component";
import {OrderSummaryComponent} from "./order-summary/order-summary.component";

const routes: Routes = [
  {path: 'order-cupcake' || 'order cupcake' || 'order-cupcakes' || 'order cupcakes' || 'order', component: OrderCupcakeComponent},
  {path: 'choose-flavor' || 'choose flavor', component: ChooseFlavorComponent},
  {path: 'order-summary' || 'order summary', component: OrderSummaryComponent},
  {path: '', redirectTo: 'order-cupcake', pathMatch: 'full'},
  {path: '**', redirectTo: 'order-cupcake'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
