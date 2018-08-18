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
  savedCharacters: Character[];

  constructor(
    private infoService: InfoService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.retrieveSavedCharacters();
  }

  retrieveSavedCharacters(): void {
    this.infoService
      .getSavedCharacters(this.storageService.getAll())
      .subscribe(savedCharacters => (this.savedCharacters = savedCharacters));
  }
}
