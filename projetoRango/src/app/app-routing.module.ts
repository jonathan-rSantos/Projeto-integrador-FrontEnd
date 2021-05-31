import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  {path:'', redirectTo: 'cadastrar', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
