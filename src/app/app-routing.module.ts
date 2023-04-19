import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';
import { JsonSmComponent } from './json-sm/json-sm.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "standalone",
    component: StandaloneComponent
  },
  {
    path: "jsonSm",
    component: JsonSmComponent
  },
  {
    path: "**",
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
