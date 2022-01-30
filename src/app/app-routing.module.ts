import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'products', component: ProductsTableComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: 'contacts', component: ContactFormComponent },
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
