import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Sitter } from './entities/sitter';

@Pipe({
  name: 'sittersSearch'
})
@Injectable()
export class SittersSearchPipe implements PipeTransform {

  transform(items: Sitter[], input: string): any {

    if (input && items.length > 0) {
      let itemsFound = items.filter(
        item => item.firstname && item.firstname.toLowerCase().includes(input.toLowerCase())
      );
      if (itemsFound && itemsFound.length > 0) {
        return itemsFound;
      }
      return null;
    }
    return items;
  }
}
