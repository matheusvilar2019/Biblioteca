import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  titulo = "Biblioteca";

  autores = [
    {"id": 1, "nomeAutor": "Aristóteles", "imgAutor": "https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    {"id": 2, "nomeAutor": "Platão", "imgAutor": "https://cdn.britannica.com/s:575x450/82/197382-004-746B6326.jpg"},
    {"id": 3, "nomeAutor": "Dostoiévski", "imgAutor": "https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},

  ]

  books = [
    {"id":1,"titulo":"Ética a Nicomaco","autor":"Aristóteles","numeroPaginas":400,"edicao":"1ª Edição", "img":"https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    {"id":2,"titulo":"Política","autor":"Aristóteles","numeroPaginas":250,"edicao":"1ª Edição", "img":"https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    {"id":3,"titulo":"Retórica","autor":"Aristóteles","numeroPaginas":275,"edicao":"3ª Edição", "img":"https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    {"id":4,"titulo":"Metafísica","autor":"Aristóteles","numeroPaginas":320,"edicao":"2ª Edição", "img":"https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    {"id":5,"titulo":"Organon","autor":"Aristóteles","numeroPaginas":572,"edicao":"3ª Edição", "img":"https://maestrovirtuale.com/wp-content/uploads/2019/10/Busto-de-Arist%C3%B3teles.jpg"},
    
    {"id":6,"titulo":"Eutífron","autor":"Platão","numeroPaginas":50,"edicao":"2ª Edição", "img":"https://lh3.googleusercontent.com/proxy/3xTQUig4jJ1PbVcw61HXV0biuj7Nsh2FZfjikH9jjoT18CNZWfT7hM7Eq8Hcjsyc0pA1X6ZUthiK9_e9IkcVND4N8Wm6p6JKusq4g6MXVdq1FPgpwpQZRNZGp2RdOmJbCS50rnmAJs3ThuqG42IOMIosXYnumYyHEw"},
    {"id":7,"titulo":"Apologia de Sócrates","autor":"Platão","numeroPaginas":70,"edicao":"1ª Edição", "img":"https://lh3.googleusercontent.com/proxy/3xTQUig4jJ1PbVcw61HXV0biuj7Nsh2FZfjikH9jjoT18CNZWfT7hM7Eq8Hcjsyc0pA1X6ZUthiK9_e9IkcVND4N8Wm6p6JKusq4g6MXVdq1FPgpwpQZRNZGp2RdOmJbCS50rnmAJs3ThuqG42IOMIosXYnumYyHEw"},
    {"id":8,"titulo":"Críton","autor":"Platão","numeroPaginas":62,"edicao":"1ª Edição", "img":"https://lh3.googleusercontent.com/proxy/3xTQUig4jJ1PbVcw61HXV0biuj7Nsh2FZfjikH9jjoT18CNZWfT7hM7Eq8Hcjsyc0pA1X6ZUthiK9_e9IkcVND4N8Wm6p6JKusq4g6MXVdq1FPgpwpQZRNZGp2RdOmJbCS50rnmAJs3ThuqG42IOMIosXYnumYyHEw"},
    {"id":9,"titulo":"República","autor":"Platão","numeroPaginas":420,"edicao":"3ª Edição", "img":"https://lh3.googleusercontent.com/proxy/3xTQUig4jJ1PbVcw61HXV0biuj7Nsh2FZfjikH9jjoT18CNZWfT7hM7Eq8Hcjsyc0pA1X6ZUthiK9_e9IkcVND4N8Wm6p6JKusq4g6MXVdq1FPgpwpQZRNZGp2RdOmJbCS50rnmAJs3ThuqG42IOMIosXYnumYyHEw"},
    {"id":10,"titulo":"Menon","autor":"Platão","numeroPaginas":150,"edicao":"2ª Edição", "img":"https://lh3.googleusercontent.com/proxy/3xTQUig4jJ1PbVcw61HXV0biuj7Nsh2FZfjikH9jjoT18CNZWfT7hM7Eq8Hcjsyc0pA1X6ZUthiK9_e9IkcVND4N8Wm6p6JKusq4g6MXVdq1FPgpwpQZRNZGp2RdOmJbCS50rnmAJs3ThuqG42IOMIosXYnumYyHEw"},

    {"id":11,"titulo":"Crime e Castigo","autor":"Dostoiévski","numeroPaginas":570,"edicao":"3ª Edição", "img":"https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},
    {"id":12,"titulo":"Memórias do Subsolo","autor":"Dostoiévski","numeroPaginas":270,"edicao":"2ª Edição", "img":"https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},
    {"id":13,"titulo":"Noites Brancas","autor":"Dostoiévski","numeroPaginas":170,"edicao":"1ª Edição", "img":"https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},
    {"id":14,"titulo":"Os Demônios","autor":"Dostoiévski","numeroPaginas":700,"edicao":"3ª Edição", "img":"https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},
    {"id":15,"titulo":"O Idiota","autor":"Dostoiévski","numeroPaginas":480,"edicao":"2ª Edição", "img":"https://factotumcultural557916749.files.wordpress.com/2019/10/image-8.jpeg?w=192"},
  ];
  http: HttpClient;
  livros: Object[] = [];
  

  constructor(http:HttpClient) {
    this.http = http;
    this.get()
  }

  get(){
    this.http
    .get<Object[]>('http://localhost:9090/biblioteca/livros')
    .subscribe(livros => this.livros = livros);

    this.http
    .get<Object[]>('http://localhost:9090/biblioteca/livros')
    .subscribe(livros => console.log(livros));

    
  }

  ngOnInit() {
  }

}
