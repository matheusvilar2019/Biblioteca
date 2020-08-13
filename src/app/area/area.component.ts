import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  areas: Object[] = [];
  http: HttpClient;
  constructor(http:HttpClient) { 
    this.http = http;
  }

  ngOnInit() {
    this.get();
  }

  get(){
    this.http
      .get<Object[]>("http://localhost:9090/biblioteca/areas")
      .subscribe(areas => this.areas = areas);
  }

}
