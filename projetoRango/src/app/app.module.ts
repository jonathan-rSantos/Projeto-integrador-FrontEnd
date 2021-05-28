import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
=======
import { SobreComponent } from './sobre/sobre.component';
>>>>>>> 6b1804d3c346199d8bea173fe9fbf52c3720059f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CadastrarComponent,
    InicioComponent,
    MenuComponent,
    RodapeComponent
=======
    SobreComponent
>>>>>>> 6b1804d3c346199d8bea173fe9fbf52c3720059f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
