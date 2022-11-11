import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { AppHelloWorldDirective } from './app-hello-world.directive';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    AppHelloWorldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
