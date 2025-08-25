import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadrastroComponent } from './cadrastro/cadrastro.component';
import { ServicoComponent } from './servico/servico.component';

@NgModule({
  declarations: [
    AppComponent,
    CadrastroComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
