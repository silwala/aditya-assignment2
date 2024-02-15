import { Injectable } from '@angular/core';
import {Cupcake} from "./cupcake";

@Injectable({
  providedIn: 'root'
})
export class CupcakeService {

  cupcake : Cupcake = new Cupcake();
  getCupcake(cupcake: Cupcake): void{
    this.cupcake = cupcake;
    console.log("Cupcake order: ", cupcake);

  }


  constructor() { }
}
