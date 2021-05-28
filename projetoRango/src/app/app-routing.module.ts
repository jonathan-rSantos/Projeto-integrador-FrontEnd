import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {path:'', redirectTo: 'cadastrar', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  /* {path: 'entrar', component: EntrarComponent }, após componente entrar descomentar*/
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
