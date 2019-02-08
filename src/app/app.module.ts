import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchSkillsPipe } from './search-skills.pipe';
import { SkillItemsComponent } from './skill-items/skill-items.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSkillsPipe,
    SkillItemsComponent,
    SkillDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
