import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-autores',
  templateUrl: './top-autores.component.html',
  styleUrls: ['./top-autores.component.css']
})
export class TopAutoresComponent implements OnInit {

  autores: Object[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAutoresOrderByView();
  }

  getAutoresOrderByView(){
    this.http
      .get<Object[]>('http://localhost:9090/biblioteca/autores/views')
      .subscribe(autores => this.autores = autores);
  }

}
