import { Component, OnInit } from '@angular/core';
import { Providers } from '../providers/providers';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosLivros } from '../publicar-livro/dadosLivros';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.css']
})
export class AlterarLivroComponent implements OnInit {

  dataForm: FormGroup;

  constructor(
    private providers: Providers,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(),
      autor: new FormControl(),
      numeroPaginas: new FormControl(),
      edicao: new FormControl()
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
