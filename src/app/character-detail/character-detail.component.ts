import { Component, OnInit } from "@angular/core";
import { SearchResult } from "../interfaces/search-results";
import { InfoService } from "../services/info.service";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"]
})
export class CharacterDetailComponent implements OnInit {
  private searchResult: SearchResult;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.infoService
      .getCharacters("page=2")
      .subscribe(searchResult => (this.searchResult = searchResult));
  }

  nextPage(): void {}
}
