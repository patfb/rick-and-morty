import { Component, OnInit } from "@angular/core";
import { InfoService } from "../info.service";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"]
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    this.infoService
      .getCharacter(1)
      .subscribe(character => (this.character = character));
  }
}
