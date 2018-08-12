import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currentPage"
})
export class CurrentPagePipe implements PipeTransform {
  transform(value: string): number {
    // https://rickandmortyapi.com/api/character/?page=2
    const nextPage: number = +value.slice(
      value.lastIndexOf("=") + 1,
      value.length
    );
    return nextPage - 1;
  }
}
