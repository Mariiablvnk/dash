import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';
import { IncomeComponent } from './income/income.component';
import { ProductComponent } from './product/product.component';
import { PromoteComponent } from './promote/promote.component';

const routes: Routes = [
  {path: 'Promote', component: PromoteComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Help', component: HelpcomponentComponent},
  {path: 'Income', component: IncomeComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
