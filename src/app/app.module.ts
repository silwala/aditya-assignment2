import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCupcakeComponent } from './order-cupcake/order-cupcake.component';
import { ChooseFlavorComponent } from './choose-flavor/choose-flavor.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OrderCupcakeComponent,
    ChooseFlavorComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
