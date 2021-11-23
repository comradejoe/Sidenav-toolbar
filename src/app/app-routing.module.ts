import { FaultviewComponent } from './faultview/faultview.component';
import { MachinesComponent } from './machines/machines.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path:'machines',component:MachinesComponent},
{path:'faultview',component:FaultviewComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
