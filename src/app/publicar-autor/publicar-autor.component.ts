import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Dados } from './dados';
import { Providers } from '../providers/providers';

@Component({
  selector: 'app-publicar-autor',
  templateUrl: './publicar-autor.component.html',
  styleUrls: ['./publicar-autor.component.css']
})
export class PublicarAutorComponent implements OnInit {

  dataForm: FormGroup;
  API_URL = "http://localhost:9090/biblioteca";



  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private providers: Providers
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nomeAutor: new FormControl(),
      imgAutor: new FormControl(),
      areaAutor: new FormControl(),
      resumoAutor: new FormControl()
    });

  }
  /*
  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }));
  }
  */

  teste() {
    const nomeAutor = this.dataForm.get('nomeAutor').value as string;
    const imgAutor = this.dataForm.get('imgAutor').value as string;
    const areaAutor = this.dataForm.get('areaAutor').value as string;
    const json = JSON.stringify({ "nomeAutor": nomeAutor, "imgAutor": imgAutor, "areaAutor": areaAutor })
    console.log(json);

  }

  publicarAutor() {
    const dados = this.dataForm.getRawValue() as Dados;
    console.log(dados)

    this.providers
      .publicarAutorProvider(dados)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }
  /*
    signupService(dados){
      console.log("inicio post")
      return this.http.post(this.API_URL + '/autor/salvar', dados)
  }
  */

}
