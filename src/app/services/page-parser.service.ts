import { Injectable } from "@angular/core";
import { SearchResult } from "../interfaces/search-results";

@Injectable({
  providedIn: "root"
})
export class PageParserService {
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

  getTotalPages(searchResult: SearchResult): number {
    let pages: number = 1;
    if (searchResult) {
      if (searchResult.info) {
        pages = searchResult.info.pages;
      }
    }
    return pages;
  }

  hasNext(searchResult: SearchResult): boolean {
    return searchResult.info.next ? true : false;
  }

  hasPrevious(searchResult: SearchResult): boolean {
    return searchResult.info.prev ? true : false;
  }

  getCurrentPage(searchResult): number {
    let currentPage: number;
    if (this.hasNext(searchResult)) {
      currentPage = this.parseCurrentPageFromNext(searchResult.info.next);
    } else {
      this.hasPrevious(searchResult);
      currentPage = this.parseCurrentPageFromPrevious(searchResult.info.prev);
    }
    return currentPage;
  }
}
