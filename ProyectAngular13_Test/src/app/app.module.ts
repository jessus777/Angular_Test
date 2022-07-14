import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { ShowOderComponent } from './orderComponent/show-oder/show-oder.component';
import { AddEditOderComponent } from './orderComponent/add-edit-oder/add-edit-oder.component';
import { OrderTestApiService } from './order-test-api.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponentComponent,
    ShowOderComponent,
    AddEditOderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
