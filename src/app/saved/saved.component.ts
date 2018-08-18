import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character";
import { InfoService } from "../services/info.service";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.css"]
})
export class SavedComponent implements OnInit {
  savedCharacters: Character[];

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.retrieveSavedCharacters();
  }

  retrieveSavedCharacters(): void {
    this.infoService
      .getSavedCharacters([1, 5, 10])
      .subscribe(savedCharacters => (this.savedCharacters = savedCharacters));
  }
}
