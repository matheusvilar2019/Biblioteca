import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DadosLivros } from './dadosLivros';
import { Providers } from '../providers/providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-livro',
  templateUrl: './publicar-livro.component.html',
  styleUrls: ['./publicar-livro.component.css']
})
export class PublicarLivroComponent implements OnInit {

  dataForm: FormGroup;

  constructor(private providers: Providers, private router: Router) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
      numeroPaginas: new FormControl(),
      edicao: new FormControl(),
      resumoLivro: new FormControl()
    })
  }

  publicarLivro(){
    const dadosLivros = this.dataForm.getRawValue() as DadosLivros;

    this.providers
      .publicarLivroProvider(dadosLivros)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}
