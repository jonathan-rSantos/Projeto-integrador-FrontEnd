import { TemaComponent } from './tema/tema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
<<<<<<< HEAD
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
=======
import { UserEditComponent } from './edit/user-edit/user-edit.component';
>>>>>>> 036326b5fa16e4cc96c88eb12a5363cdf303c2c6

const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
<<<<<<< HEAD
  {path: 'postagem-edit/:id', component: PostagemEditComponent}
=======
  {path: 'user-edit/:id', component: UserEditComponent}
>>>>>>> 036326b5fa16e4cc96c88eb12a5363cdf303c2c6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
