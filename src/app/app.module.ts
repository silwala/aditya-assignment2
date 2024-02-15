import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCupcakeComponent } from './order-cupcake/order-cupcake.component';
import { ChooseFlavorComponent } from './choose-flavor/choose-flavor.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {FormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatDivider} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    OrderCupcakeComponent,
    ChooseFlavorComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatToolbar,
    NgOptimizedImage,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatDivider
  ],
  providers: [
    provideAnimationsAsync(),
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
