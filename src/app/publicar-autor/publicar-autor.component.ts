import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Dados } from './dados';
import { Providers } from '../providers/providers';
import { UploadFileServiceService } from '../upload-file/uploadFileService/upload-file-service.service';
import { uploadProgress, filterResponse } from '../shared/rxjs-operators';

@Component({
  selector: 'app-publicar-autor',
  templateUrl: './publicar-autor.component.html',
  styleUrls: ['./publicar-autor.component.css']
})
export class PublicarAutorComponent implements OnInit {

  object: Object[] = []
  files: Set<File>;
  progress = 0;
  dataForm: FormGroup;
  API_URL = "http://localhost:9090/biblioteca";
  link: any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private providers: Providers,
    private service: UploadFileServiceService
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nomeAutor: new FormControl(),
      imgAutor: new FormControl(this.link),
      areaAutor: new FormControl(),
      resumoAutor: new FormControl()
    });
  }

  onChange(event){
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    //document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i=0; i<selectedFiles.length; i++){
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

    this.progress = 0;
  }
  onUpload(){
    if (this.files && this.files.size > 0){
      this.service.upload(this.files, 'http://localhost:9090/biblioteca/uploadFile2/12')
        .pipe(
          uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        //.subscribe(response => console.log('Upload Concluido'));
        .subscribe(response => this.RespostaUrl(response));
        /*
        .subscribe((event: HttpEvent<Object>) => {
          //console.log(event);
          if (event.type == HttpEventType.Response){
            console.log('Upload Concluido');
          }

          else if (event.type == HttpEventType.UploadProgress){
            const percentDone = Math.round((event.loaded * 100) / event.total);
            //console.log('Progresso', percentDone);
            this.progress = percentDone;
          }
        } );
        */
    }
  }

  RespostaUrl(response){
    console.log(response.fileDownloadUri)
    this.link = response.fileDownloadUri;
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

  publicarAutor3(){
    const dados = this.dataForm.getRawValue() as Dados;
    console.log((this.dataForm.getRawValue() as Dados));
    const json = JSON.stringify({ nomeAutor: 1, imgAutor: 2, areaAutor: 3 });
    console.log(json);
    console.log(this.link);



  }

  publicarAutor() {
    //const dados = this.dataForm.getRawValue() as Dados;
    //console.log(dados)

    const nomeAutor = this.dataForm.get('nomeAutor').value as Dados;
    const areaAutor = this.dataForm.get('areaAutor').value as Dados;
    const resumoAutor = this.dataForm.get('resumoAutor').value as Dados;
    const json = JSON.stringify({ "nomeAutor": nomeAutor, "imgAutor": this.link, "areaAutor": areaAutor, "resumoAutor": resumoAutor })
    const jsonobject = JSON.parse(json);
    console.log(jsonobject);
    

    this.providers
      .publicarAutorProvider(JSON.parse(json))
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
