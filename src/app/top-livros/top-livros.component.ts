import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-livros',
  templateUrl: './top-livros.component.html',
  styleUrls: ['./top-livros.component.css']
})
export class TopLivrosComponent implements OnInit {

  livros: Object[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLivrosOrderByView();
  }

  getLivrosOrderByView(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livros/views')
      .subscribe(livros => this.livros = livros);
  }

}
