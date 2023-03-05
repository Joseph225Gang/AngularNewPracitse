import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';


const routes: Routes = [
  {
    path: "standalone",
    component: StandaloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
