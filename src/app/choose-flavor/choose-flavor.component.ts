import {Component} from '@angular/core';
import {Cupcake} from "../cupcake";
import {CupcakeService} from "../cupcake.service";
import {CupcakeFlavor} from "../cupcake-flavor";
import {Router} from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-choose-flavor',
  templateUrl: './choose-flavor.component.html',
  styleUrl: './choose-flavor.component.css'
})
export class ChooseFlavorComponent {

  title = 'Choose Flavor';
  cupcake : Cupcake;
  cupcakeFlavors = [CupcakeFlavor.VANILLA, CupcakeFlavor.CHOCOLATE, CupcakeFlavor.RED_VELVET, CupcakeFlavor.SALTED_CARAMEL, CupcakeFlavor.COFFEE]
  cupcakeFlavor : CupcakeFlavor = CupcakeFlavor.VANILLA;
  price : string | null = this.service.cupcake.price.toString();
  constructor(private service : CupcakeService, private  router: Router, private currency : CurrencyPipe) {
    this.cupcake = service.cupcake;
    this.price = this.currency.transform( this.price,'USD', 'symbol', '1.2-2');
  }


  onCancel(){
    this.router.navigate(['/order-cupcake']);
  }

  onClickNext(){
    this.cupcake.cupcakeFlavor = this.cupcakeFlavor;
    this.service.getCupcake(this.cupcake);
  }

   protected readonly CupcakeFlavor = CupcakeFlavor;
}
