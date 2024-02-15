import {Component} from '@angular/core';
import {Cupcake} from "../cupcake";
import {CupcakeService} from "../cupcake.service";
import {CupcakeFlavor} from "../cupcake-flavor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-flavor',
  templateUrl: './choose-flavor.component.html',
  styleUrl: './choose-flavor.component.css'
})
export class ChooseFlavorComponent {

  cupcake : Cupcake;
  cupcakeFlavor : CupcakeFlavor = CupcakeFlavor.VANILLA;
  constructor(private service : CupcakeService, private  router: Router) {
    this.cupcake = service.cupcake;
  }
    price = this.service.cupcake.price;

  onCancel(){
    this.router.navigate(['/order-cupcake']);
  }

  onClickNext(){
    this.cupcake.cupcakeFlavor = this.cupcakeFlavor;
    this.service.getCupcake(this.cupcake);
  }

   protected readonly CupcakeFlavor = CupcakeFlavor;
}
