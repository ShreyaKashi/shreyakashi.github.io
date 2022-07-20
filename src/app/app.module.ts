import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './common/components/common-components.module';
import { HomeComponent } from './home/home.component';
import { WrittenContentComponent } from './written-content/written-content.component';
import { TechCornerComponent } from './tech-corner/tech-corner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrittenContentComponent,
    TechCornerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
