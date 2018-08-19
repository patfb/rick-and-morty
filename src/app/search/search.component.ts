import { Component, OnInit } from "@angular/core";
import { SearchParamater } from "../interfaces/search-paramater";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";
import { QueryParamService } from "../services/queryparam.service";
import { PageParserService } from "../services/page-parser.service";

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
    private pageParser: PageParserService
  ) {
    this.totalPages = 1;
  }

  ngOnInit() {}

  isEqualToAny(input: string) {
    return "any" !== input.toLowerCase();
  }

  hasNext(inputSearchResult: SearchResult) {
    return this.pageParser.hasNext(inputSearchResult);
  }

  hasPrevious(inputSearchResult: SearchResult) {
    return this.pageParser.hasPrevious(inputSearchResult);
  }

  switchPage(pageUrl: string): void {
    this.searchConducted = true;
    this.infoService.getDifferentPage(pageUrl).subscribe(searchResult => {
      this.searchResult = searchResult;
      this.totalPages = this.pageParser.getTotalPages(searchResult);
      this.currentPage = this.pageParser.getCurrentPage(searchResult);
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
      this.totalPages = this.pageParser.getTotalPages(searchResult);
      console.log("totalPages:" + this.totalPages);
      this.currentPage = this.pageParser.getCurrentPage(searchResult);
      console.log("current page: " + this.currentPage);
    });
  }
}
