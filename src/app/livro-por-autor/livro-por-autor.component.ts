import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-por-autor',
  templateUrl: './livro-por-autor.component.html',
  styleUrls: ['./livro-por-autor.component.css']
})
export class LivroPorAutorComponent implements OnInit {
  http: HttpClient;
  livros: Object[] = [];
  nomeAutor: string;

  constructor(http: HttpClient, private route: ActivatedRoute) {
    this.http = http;
    

  }

  ngOnInit() {
    console.log(this.route.snapshot.params.nomeAutor);
    this.nomeAutor = this.route.snapshot.params.nomeAutor;
    this.getLivros();
  }

  getLivros(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livro/autor/' + this.nomeAutor)
      .subscribe(livros => this.livros = livros);
  }

}
