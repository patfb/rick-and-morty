import { Component, OnInit } from "@angular/core";
import { Character } from "../character";
import { InfoService } from "../info.service";
import { SearchResult } from "../search-results";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  api = "https://rickandmortyapi.com/api";
  searchResult: SearchResult;

  constructor(private infoService: InfoService) {}

  ngOnInit() {}

  search(): void {
    this.infoService
      .search()
      .subscribe(searchResult => (this.searchResult = searchResult));
  }
}
