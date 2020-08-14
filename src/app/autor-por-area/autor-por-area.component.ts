import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autor-por-area',
  templateUrl: './autor-por-area.component.html',
  styleUrls: ['./autor-por-area.component.css']
})
export class AutorPorAreaComponent implements OnInit {
  area: string;
  autores: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.area = this.route.snapshot.params.area;
    console.log(this.area);
    this.getAutores();
  }

  getAutores(){
    this.http
      .get<Object[]>("http://localhost:9090/biblioteca/autores/area/" + this.area)
      .subscribe(autores => this.autores = autores)
  }

}
