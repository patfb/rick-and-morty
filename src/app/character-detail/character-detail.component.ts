import { Component, OnInit } from "@angular/core";
import { InfoService } from "../info.service";
import { Character } from "../character";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"]
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  characters: Character[];

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getCharacter(1);
    this.getCharacters();
  }

  getCharacter(id: number): void {
    this.infoService
      .getCharacter(id)
      .subscribe(character => (this.character = character));
  }

  getCharacters(): void {
    const charsToGet: number[] = [1, 2, 3, 4, 5];
    this.infoService
      .getCharacters(charsToGet)
      .subscribe(characters => (this.characters = characters));
  }
}
