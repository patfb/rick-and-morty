import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character";
import { InfoService } from "../services/info.service";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.css"]
})
export class SavedComponent implements OnInit {
  isSingleCharacter: boolean;
  savedCharacters: Character[];
  singleCharacter: Character;

  constructor(
    private infoService: InfoService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.retrieveSavedCharacters();
  }

  retrieveSavedCharacters(): void {
    const storedIds = this.storageService.getAll();

    if (storedIds.length > 1) {
      console.log("more than 1 long");
      this.infoService
        .getMultipleSavedCharacters(storedIds)
        .subscribe(fechedCharacters => {
          this.savedCharacters = fechedCharacters;
        });
    } else if (storedIds.length === 1) {
      console.log("just 1 long");
      this.infoService
        .getSingleSavedCharacter(storedIds)
        .subscribe(fetchedCharacter => {
          this.savedCharacters = [];
          this.savedCharacters.push(fetchedCharacter);
        });
    }
  }
}