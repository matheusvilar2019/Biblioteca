import { Component, OnInit } from '@angular/core';
import { Providers } from '../providers/providers';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosLivros } from '../publicar-livro/dadosLivros';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.css']
})
export class AlterarLivroComponent implements OnInit {

  dataForm: FormGroup;
  id: number;
  titulo: string;
  autor: string;
  numeroPaginas: number;
  edicao: string;


  constructor(
    private providers: Providers,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.titulo = this.route.snapshot.params.titulo;
    this.autor = this.route.snapshot.params.autor;
    this.numeroPaginas = this.route.snapshot.params.numeroPaginas;
    this.edicao = this.route.snapshot.params.edicao;


    this.dataForm = new FormGroup({
      id: new FormControl(this.id),
      titulo: new FormControl(this.titulo),
      autor: new FormControl(this.autor),
      numeroPaginas: new FormControl(this.numeroPaginas),
      edicao: new FormControl(this.edicao)
    });
  }

  alterarLivro(){
    const dados = this.dataForm.getRawValue() as DadosLivros;
    if(dados.titulo == null){
      dados.titulo = "Eu mando aqui";
    }
    
    console.log(dados)

    this.providers
      .update(dados)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}
