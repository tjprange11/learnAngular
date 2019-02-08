import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  inputs: ['skill']
})
export class SkillDetailsComponent implements OnInit {

  currentLevel: number;
  currentXp: number;
  targetLevel: number;
  targetXp: number;
  levelData: object;

  constructor(private http : HttpClient) { 
    this.levelData = [];
    this.currentLevel = 1;
    this.currentXp = 0;
    this.targetLevel = 2;
    this.targetXp = this.levelData[this.targetLevel - 1];
  }

  ngOnInit(): void {
    this.http.get<Object>('./assets/levelData.json').subscribe(
      data => {
        this.levelData = data;
      }
    )
  }

}
