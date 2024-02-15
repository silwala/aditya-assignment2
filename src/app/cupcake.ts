import {CupcakeFlavor} from "./cupcake-flavor";

export class Cupcake {

  amount : number = 1;
  cupcakeFlavor: CupcakeFlavor = CupcakeFlavor.VANILLA;
  pricePerCupcake = 2;
  get price(): number {
    return this.pricePerCupcake * this.amount;
  }
}
