import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  }
