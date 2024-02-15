import { Component } from '@angular/core';
import {Cupcake} from "../cupcake";
import {CupcakeService} from "../cupcake.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  title = "Order Summary";
  // cupcake : Cupcake;
  constructor(private service : CupcakeService, private  router: Router) {
    // this.cupcake = service.cupcake;
  }

  quantity = this.service.cupcake.amount;
  flavor = this.service.cupcake.cupcakeFlavor;
  price = this.service.cupcake.price;


  onGoBack(){
    this.router.navigate(['/choose-flavor']);
  }

  onCancel(){
    this.router.navigate(['/order-cupcake']);
  }

}
