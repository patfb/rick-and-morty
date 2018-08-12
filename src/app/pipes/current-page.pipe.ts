import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currentPage"
})
export class CurrentPagePipe implements PipeTransform {
  transform(value: string): number {
    const nextPage: number = +value.slice(value.length - 1, value.length);
    return nextPage - 1;
  }
}
