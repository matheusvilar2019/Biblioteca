import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Providers } from '../providers/providers';

@Component({
  selector: 'app-ver-livro',
  templateUrl: './ver-livro.component.html',
  styleUrls: ['./ver-livro.component.css']
})
export class VerLivroComponent implements OnInit {
  id: string;
  livro: Object[] = [];
  livrosAutor: Object[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private providers: Providers
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.getLivro();
    this.getVariaveis();
  }

  getLivro(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livro/' + this.id)
      .subscribe(livro => this.livro = livro);
  }



  getVariaveis(){
    this.http
      .get<any>('http://localhost:9090/biblioteca/livro/' + this.id)
      .subscribe(livro => this.livroVariaveis(livro));
  }

  livroVariaveis(livro){
    this.updateViews(livro);
    this.getLivrosPorAutor(livro);
  }

  updateViews(livro){
    this.providers
      .updateViewsLivro(livro.id, (livro.viewsLivro + 1))
      .subscribe(
        () => console.log('ID: ' + livro.id + ' | Views: ' + livro.viewsLivro),
        (err) => console.log(err)
      );
  }

  getLivrosPorAutor(livro){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livro/autor/' + livro.autor)
      .subscribe(livrosAutor => this.livrosAutor = livrosAutor);
  }

}
