import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Providers } from '../providers/providers';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-livro',
  templateUrl: './excluir-livro.component.html',
  styleUrls: ['./excluir-livro.component.css']
})
export class ExcluirLivroComponent implements OnInit {

  dataForm: FormGroup;

  constructor(
    private providers: Providers,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      id: new FormControl(2)
    });
  }

  excluirLivro(){
    console.log("Excluiu o Livro " + this.dataForm.get('id').value);
    this.providers
      .remove(this.dataForm.get('id').value)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}
