import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
