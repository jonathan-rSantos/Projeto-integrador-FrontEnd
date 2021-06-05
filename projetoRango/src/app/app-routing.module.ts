import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
