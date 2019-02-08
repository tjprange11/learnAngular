import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  skills: object;
  currentSkill: object;

  showSkill(item){
    this.query = item.name;
    this.currentSkill = item;
  }

  constructor(private http: HttpClient) {
    this.query = '';
    this.skills = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('./assets/data.json').subscribe(
      data => {
        this.skills = data;
      }
    )
  }
}
