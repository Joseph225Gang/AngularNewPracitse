import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { AppHelloWorldDirective } from './custom-button.directive';
import { ContentChildComponent } from './content-child/content-child.component';
import { HighlightDirective } from './highlight.directive';
import { DataService } from './data.service';
import { newData } from './newData';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    AppHelloWorldDirective,
    ContentChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: DataService,
    useValue: newData
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
