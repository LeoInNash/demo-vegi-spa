import { Pipe, PipeTransform } from '@angular/core';
import { blog } from './mock-data-blog-page';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchText: string): any {
    if (!searchText || !value) {
      return value;
    }
    return value.filter((item: blog) => {
      return item.title
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
}
