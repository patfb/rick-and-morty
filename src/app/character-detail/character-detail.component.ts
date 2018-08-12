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

  getCharacters(): void {
    this.infoService
      .getCharacters()
      .subscribe(searchResult => (this.searchResult = searchResult));
  }
}
