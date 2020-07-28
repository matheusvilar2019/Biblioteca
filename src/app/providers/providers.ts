import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';


const API_URL = "http://localhost:9090/biblioteca";
@Injectable()
export class Providers {

  constructor(private http: HttpClient) { }

  publicarAutorProvider(dados){
    console.log("Agora pelo provider =)");
    return this.http.post(API_URL + '/autor/salvar', dados)
  }

  publicarLivroProvider(dadosLivro){
      console.log("Agora pelo provider =)");
      return this.http.post(API_URL + '/livro/salvar', dadosLivro)
  }

  update(dadosLivro){
    return this.http.put(API_URL + '/livro/alterar/', dadosLivro).pipe(take(1));
  }

}
