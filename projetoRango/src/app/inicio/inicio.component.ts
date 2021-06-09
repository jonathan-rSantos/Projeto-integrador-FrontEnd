import { CurtirService } from './../service/curtir.service';
import { Curtir } from './../model/Curtir';
import { ComentarioService } from './../service/comentario.service';
import { Postagem } from '../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { User } from '../model/User';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id
  
  constructor(  
    private router: Router  ,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas ()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])) => {
      this.listaTemas = resp   
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema.subscribe((resp:Tema))
  }
  
  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    



  }


  teste(){
    console.log('funcionei')
  }

}

