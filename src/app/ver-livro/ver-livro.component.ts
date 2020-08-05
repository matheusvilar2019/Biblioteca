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

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private providers: Providers
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.getLivro();
    this.getViews();
  }

  getLivro(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/livro/' + this.id)
      .subscribe(livro => this.livro = livro);
  }

  getViews(){
    this.http
      .get<any>('http://localhost:9090/biblioteca/livro/' + this.id)
      .subscribe(livro => this.updateViews(livro.id, (livro.viewsLivro + 1)));
  }

  updateViews(id, viewsLivro){
    this.providers
      .updateViewsLivro(id, viewsLivro)
      .subscribe(
        () => console.log('ID: ' + id + ' | Views: ' + viewsLivro),
        (err) => console.log(err)
      );
  }

}
