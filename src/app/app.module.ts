import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AutoresComponent } from './autores/autores.component';
import { InicialComponent } from './inicial/inicial.component';
import { RouterModule } from '@angular/router';
import { PublicarAutorComponent } from './publicar-autor/publicar-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Providers } from './providers/providers';
import { PublicarLivroComponent } from './publicar-livro/publicar-livro.component';
import { LivroPorAutorComponent } from './livro-por-autor/livro-por-autor.component'; 
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { ExcluirLivroComponent } from './excluir-livro/excluir-livro.component';
import { TopAutoresComponent } from './top-autores/top-autores.component';
import { VerLivroComponent } from './ver-livro/ver-livro.component';
import { TopLivrosComponent } from './top-livros/top-livros.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadFileServiceService } from './upload-file/uploadFileService/upload-file-service.service';
import { AreaComponent } from './area/area.component';
import { AutorPorAreaComponent } from './autor-por-area/autor-por-area.component';


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    AutoresComponent,
    InicialComponent,
    PublicarAutorComponent,
    PublicarLivroComponent,
    LivroPorAutorComponent,
    AlterarLivroComponent,
    ExcluirLivroComponent,
    TopAutoresComponent,
    VerLivroComponent,
    TopLivrosComponent,
    UploadFileComponent,
    AreaComponent,
    AutorPorAreaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LivrosComponent
  ],
  providers: [Providers, UploadFileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
