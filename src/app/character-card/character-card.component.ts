import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../interfaces/character";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.css"]
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character: Character;

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  saveCard(id: number) {
    this.storageService.save(id);
  }

  unsaveCard(id: number) {
    this.storageService.unsave(id);
  }
}
