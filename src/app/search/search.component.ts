import { HttpParams } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { InfoService } from "../info.service";
import { SearchResult } from "../search-results";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input() name: string;

  api = "https://rickandmortyapi.com/api";
  searchResult: SearchResult;
  params = new HttpParams().set("name", "rick");

  constructor(private infoService: InfoService) {}

  ngOnInit() {}

  search(): void {
    this.infoService
      .search(this.params)
      .subscribe(searchResult => (this.searchResult = searchResult));
  }
}
