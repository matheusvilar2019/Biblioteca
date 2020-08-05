import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { LivrosComponent } from "./livros/livros.component";
import { AutoresComponent } from "./autores/autores.component";
import { InicialComponent } from "./inicial/inicial.component";
import { PublicarAutorComponent } from "./publicar-autor/publicar-autor.component";
import { PublicarLivroComponent } from "./publicar-livro/publicar-livro.component";
import { LivroPorAutorComponent } from "./livro-por-autor/livro-por-autor.component";
import { AlterarLivroComponent } from "./alterar-livro/alterar-livro.component";
import { ExcluirLivroComponent } from "./excluir-livro/excluir-livro.component";
import { TopAutoresComponent } from "./top-autores/top-autores.component";
import { VerLivroComponent } from "./ver-livro/ver-livro.component";
import { TopLivrosComponent } from "./top-livros/top-livros.component";

const routes: Routes = [
    { path: 'livros', component: LivrosComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'publicarAutor', component: PublicarAutorComponent },
    { path: 'publicarLivro', component: PublicarLivroComponent },
    { path: 'livroPorAutor/:nomeAutor', component: LivroPorAutorComponent },
    { path: 'alterarLivro/:id/:titulo/:autor/:numeroPaginas/:edicao', component: AlterarLivroComponent},
    { path: 'excluirLivro/:id', component: ExcluirLivroComponent},
    { path: 'topAutores', component: TopAutoresComponent},
    { path: 'verLivro/:id', component: VerLivroComponent},
    { path: 'topLivros', component: TopLivrosComponent },
    { path: '**', component: InicialComponent}
];

const routerOptions: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    // ...any other options you'd like to use
  };

@NgModule({
    imports: [
        RouterModule.forRoot(routes, routerOptions)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}