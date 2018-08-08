import { Component, OnInit } from "@angular/core";
import { InfoService } from "../info.service";
import { QueryParamService } from "../queryparam.service";
import { SearchResult } from "../search-results";
import { SearchParamater } from "../search-paramater";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  name: string;
  status: string;
  searchResult: SearchResult;
  api: string = "https://rickandmortyapi.com/api";

  constructor(
    private infoService: InfoService,
    private queryParamGeneratorService: QueryParamService
  ) {}

  ngOnInit() {}

  search(): void {
    console.log("name:" + this.name);
    console.log("status:" + this.status);
    let nameParam = new SearchParamater();
    let statusParam = new SearchParamater();
    let paramArray: any[] = [];

    if (this.name) {
      nameParam.key = "name";
      nameParam.value = this.name;
      console.log("nameParam:" + JSON.stringify(nameParam));
      paramArray.push(nameParam);
    }

    if (this.status) {
      statusParam.key = "status";
      statusParam.value = this.status;
      console.log("statusParam:" + JSON.stringify(statusParam));
      paramArray.push(statusParam);
    }

    console.log("paramArray: " + JSON.stringify(paramArray));

    let queryString: string = this.queryParamGeneratorService.generateSearchString(
      paramArray
    );

    console.log("queryString:" + queryString);

    this.infoService
      .search(queryString)
      .subscribe(searchResult => (this.searchResult = searchResult));
  }
}
