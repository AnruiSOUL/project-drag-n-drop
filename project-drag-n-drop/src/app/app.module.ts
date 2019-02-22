import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SkyhookDndModule } from "@angular-skyhook/core";
import { default as HTML5Backend } from 'react-dnd-html5-backend';



@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
    MatExpansionModule,
    SkyhookDndModule.forRoot({ backend: HTML5Backend })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
