import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-items',
  templateUrl: './skill-items.component.html',
  inputs: ['skill']
})
export class SkillItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
