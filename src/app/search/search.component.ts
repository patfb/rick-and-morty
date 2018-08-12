import { Component, OnInit } from "@angular/core";
import { SearchParamater } from "../interfaces/search-paramater";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";
import { QueryParamService } from "../services/queryparam.service";

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

  constructor(
    private infoService: InfoService,
    private queryParamGeneratorService: QueryParamService
  ) {}

  ngOnInit() {}

  isEqualToAny(input: string) {
    return "any" !== input.toLowerCase();
  }

  search(): void {
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

    const queryString: string = this.queryParamGeneratorService.generateSearchString(
      paramArray
    );

    this.infoService
      .search(queryString)
      .subscribe(searchResult => (this.searchResult = searchResult));
  }
}
