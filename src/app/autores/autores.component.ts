import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  http: HttpClient;
  autores: Object[] = [];
  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  ngOnInit() {
    this.getAutores();
  }

  getAutores(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/autores')
      .subscribe(autores => this.autores = autores);
    

    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/autores')
      .subscribe(autores => console.log(autores));
  }

}
