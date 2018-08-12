import { Component, OnInit } from "@angular/core";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"]
})
export class CharacterDetailComponent implements OnInit {
  searchResult: SearchResult;

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

  getCharacters(): void {
    this.infoService
      .getCharacters()
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
