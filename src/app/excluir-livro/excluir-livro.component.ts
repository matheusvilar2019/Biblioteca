import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Providers } from '../providers/providers';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-livro',
  templateUrl: './excluir-livro.component.html',
  styleUrls: ['./excluir-livro.component.css']
})
export class ExcluirLivroComponent implements OnInit {

  id: number;
  livro: Object[] = [];

  constructor(
    private providers: Providers,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.get();
  }

  excluirLivro(){
    this.providers
      .remove(this.id)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

  get(){
    this.http
    .get<Object[]>('http://localhost:9090/biblioteca/livro/' + this.id)
    .subscribe(livro => this.livro = livro);

    this.http
    .get<Object[]>('http://localhost:9090/biblioteca/livro/' + this.id)
    .subscribe(livro => console.log(livro));    
  }

}
