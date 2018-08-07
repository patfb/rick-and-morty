import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { InfoService } from "../info.service";
import { SearchResult } from "../search-results";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  name: string;
  status: string;

  api = "https://rickandmortyapi.com/api";
  searchResult: SearchResult;

  constructor(private infoService: InfoService) {}

  ngOnInit() {}

  search(): void {
    console.log("name: " + this.name);
    console.log("status: " + this.status);

    this.infoService
      .search(this.buildParams())
      .subscribe(searchResult => (this.searchResult = searchResult));
  }

  buildParams(): string {
    //HttpParams is immutable so calling .set() on it returns a new instance instead of appending
    let queryParams: string = "?";

    if (this.name) {
      queryParams += "name=" + this.name;
    }

    if (this.status && this.status.toLowerCase() !== "any") {
      queryParams += "&status=" + this.status;
    }

    return queryParams;
  }
}
