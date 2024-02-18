import { Component } from '@angular/core';
import {CupcakeService} from "../cupcake.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  title = "Order Summary";
  price = this.service.cupcake.price;
  quantity = this.service.cupcake.amount;
  flavor = this.service.cupcake.cupcakeFlavor;

  constructor(private service : CupcakeService, private  router: Router) {
  }

  onGoBack(){
    this.router.navigate(['/choose-flavor']);
  }

  onCancel(){
    this.router.navigate(['/order-cupcake']);
  }

}
