import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Crear un modulo llamado contadorModule
//declaraciones y exportaciones
import { contadorModule } from './contador/contador.Module';

import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, contadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
