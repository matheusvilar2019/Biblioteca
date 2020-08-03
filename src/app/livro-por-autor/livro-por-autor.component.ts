import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Providers } from '../providers/providers';

@Component({
  selector: 'app-livro-por-autor',
  templateUrl: './livro-por-autor.component.html',
  styleUrls: ['./livro-por-autor.component.css']
})
export class LivroPorAutorComponent implements OnInit {
  http: HttpClient;
  livros: Object[] = [];
  autor: Object[] = [];
  nomeAutor: string;

  constructor(http: HttpClient, private route: ActivatedRoute, private providers: Providers) {
    this.http = http;


  }

  ngOnInit() {
    console.log(this.route.snapshot.params.nomeAutor);
    this.nomeAutor = this.route.snapshot.params.nomeAutor;
    this.getAutor();
    this.getLivros();
    this.postView()

  }

  getLivros() {
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livro/autor/' + this.nomeAutor)
      .subscribe(livros => this.livros = livros);
  }

  getAutor() {
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/autor/nome/' + this.nomeAutor)
      .subscribe(autor => this.autor = autor);

    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/autor/nome/' + this.nomeAutor)
      .subscribe(autor => console.log(autor));
  }

  postView() {
    const viewsAutor = this.http
      .get<number>('http://localhost:9090/biblioteca/autor/nome/' + this.nomeAutor)
      .subscribe(autor => this.teste((autor[0].id), (autor[0].viewsAutor + 1)));

  }

  teste(id, viewsAutor) {
    this.providers
      .updateUmaInformação(id, viewsAutor)
      .subscribe(
        () => console.log(id + "| Views: " + viewsAutor),
        err => console.log(err)
      );;
  }

}
