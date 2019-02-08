import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSkills'
})
export class SearchSkillsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
