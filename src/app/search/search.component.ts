import { Component, OnInit } from "@angular/core";
import { SearchParamater } from "../interfaces/search-paramater";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";
import { QueryParamService } from "../services/queryparam.service";
import { CurrentPageParserService } from "../services/current-page-parser.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  name: string;
  status = "any";
  gender = "any";
  searchResult: SearchResult;
  searchConducted: boolean;
  value: number = 1;
  totalPages: number;
  currentPage: number;

  constructor(
    private infoService: InfoService,
    private queryParamGenerator: QueryParamService,
    private currentPageParser: CurrentPageParserService
  ) {
    this.totalPages = 1;
  }

  ngOnInit() {}

  isEqualToAny(input: string) {
    return "any" !== input.toLowerCase();
  }

  getPages(searchResult: SearchResult): number {
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

  switchPage(pageUrl: string): void {
    this.searchConducted = true;
    this.infoService.getDifferentPage(pageUrl).subscribe(searchResult => {
      this.searchResult = searchResult;
      this.totalPages = this.getPages(searchResult);
      this.currentPage = this.getCurrentPage(searchResult);
      console.log("current page: " + this.currentPage);
    });
  }

  search(): void {
    this.searchConducted = true;
    const paramArray: any[] = [];

    if (this.name) {
      const nameParam: SearchParamater = new SearchParamater("name", this.name);
      paramArray.push(nameParam);
    }

    if (this.status && this.isEqualToAny(this.status)) {
      const statusParam = new SearchParamater("status", this.status);
      paramArray.push(statusParam);
    }

    if (this.gender && this.isEqualToAny(this.gender)) {
      const genderParam = new SearchParamater("gender", this.gender);
      paramArray.push(genderParam);
    }

    const queryString: string = this.queryParamGenerator.generateSearchString(
      paramArray
    );

    this.infoService.search(queryString).subscribe(searchResult => {
      this.searchResult = searchResult;
      this.totalPages = this.getPages(searchResult);
      console.log("totalPages:" + this.totalPages);
      this.currentPage = this.getCurrentPage(searchResult);
      console.log("current page: " + this.currentPage);
    });
  }

  getCurrentPage(searchResult): number {
    let currentPage: number;
    if (this.hasNext(searchResult)) {
      currentPage = this.currentPageParser.parseCurrentPageFromNext(
        searchResult.info.next
      );
    } else {
      this.hasPrevious(searchResult);
      currentPage = this.currentPageParser.parseCurrentPageFromPrevious(
        searchResult.info.prev
      );
    }
    return currentPage;
  }
}
