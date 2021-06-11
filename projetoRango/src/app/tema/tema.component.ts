import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

tema: Tema = new Tema()
listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    if(environment.tipo != 'admin'){
<<<<<<< HEAD
      this.alertas.showAlertInfo('Você precisa ser uma ONG para cadastrar um novo tema')
=======
      this.alertas.showAlertInfo('Você precisa ser um administrador para cadastrar um novo tema')
>>>>>>> fb97e94bbb2f11354c8cbab0de3431345c9c5187
      this.router.navigate(['/inicio'])
    }

     this.findAllTemas() 

  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
    this.listaTemas = resp
    })  
    
      }
    
    cadastrar(){
      this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
        this.tema = resp
        this.alertas.showAlertSuccess('Tema cadastrado, parabéns!')
        this.findAllTemas()
        this.tema = new Tema()
      })
    }
    }
    


  
