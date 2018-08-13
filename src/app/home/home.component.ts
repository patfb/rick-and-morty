import { Component, OnInit } from "@angular/core";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  searchResult: SearchResult;
  selectedPage: number;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getCharacters();
  }

  hasPrevious(): boolean {
    if (this.searchResult) {
      if (this.searchResult.info) {
        if (this.searchResult.info.prev !== "") {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  getPages(): number {
    if (this.searchResult) {
      if (this.searchResult.info) {
        return this.searchResult.info.pages;
      }
    }
  }

  getCharacters(page?: number): void {
    this.infoService
      .getCharacters(page)
      .subscribe(searchResult => (this.searchResult = searchResult));
  }

  nextPage(): void {
    this.infoService
      .getDifferentPage(this.searchResult.info.next)
      .subscribe(newSearchResult => (this.searchResult = newSearchResult));
  }

  prevPage(): void {
    this.infoService
      .getDifferentPage(this.searchResult.info.prev)
      .subscribe(newSearchResult => (this.searchResult = newSearchResult));
  }
}
