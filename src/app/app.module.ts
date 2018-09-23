import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignListaComponent } from './designs/design-lista/design-lista.component';
import { DesignDetailComponent } from './designs/design-detail/design-detail.component';
import { DesignsComponent } from './designs/designs.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignListaComponent,
    DesignDetailComponent,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
