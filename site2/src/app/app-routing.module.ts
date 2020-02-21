import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfprComponent} from "./ifpr/ifpr.component";
import { TadsComponent } from "./tads/tads.component";
import { AngComponent } from "./angular/ang.component";

const routes: Routes = [
  {path:"ifpr", component: IfprComponent},
  {path:"tads", component: TadsComponent},
  {path:"ang", component: AngComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
