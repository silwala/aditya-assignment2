import { Component } from '@angular/core';
import {Cupcake} from "../cupcake";
import {CupcakeService} from "../cupcake.service";


@Component({
  selector: 'app-order-cupcake',
  templateUrl: './order-cupcake.component.html',
  styleUrl: './order-cupcake.component.css'
})
export class OrderCupcakeComponent {

  title = 'Order Cupcake';
  cupcake : Cupcake = new Cupcake();

  constructor(private service: CupcakeService) {
  }

  onSetAmount(amount: number){
    this.cupcake.amount = amount;
    this.service.getCupcake(this.cupcake);

  }

}
