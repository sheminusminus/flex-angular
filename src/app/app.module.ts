import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: 'grid', component: AgGridComponent },
  { path: 'products', component: ProductDetailComponent },
  { path: '', component: ProductDetailComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
