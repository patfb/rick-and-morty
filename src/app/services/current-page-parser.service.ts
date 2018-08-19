import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CurrentPageParserService {
  constructor() {}

  parseCurrentPageFromNext(nextPage: string): number {
    return this.findPageNumber(nextPage) - 1;
  }

  parseCurrentPageFromPrevious(previousPage: string) {
    return this.findPageNumber(previousPage) + 1;
  }

  private findPageNumber(pageUrl: string): number {
    let foundNumber: string;
    let splitOnEqualSign: string[];

    if (pageUrl.indexOf("&") > -1) {
      let splitOnAmpersand: string[] = pageUrl.split("&");
      splitOnEqualSign = splitOnAmpersand[0].split("=");
    } else {
      splitOnEqualSign = pageUrl.split("=");
    }
    foundNumber = splitOnEqualSign[splitOnEqualSign.length - 1];
    return parseInt(foundNumber);
  }
}
