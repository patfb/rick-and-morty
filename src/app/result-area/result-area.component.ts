import { Component, OnInit, Input } from "@angular/core";
import { SearchResult } from "../interfaces/search-results";

@Component({
  selector: "app-result-area",
  templateUrl: "./result-area.component.html",
  styleUrls: ["./result-area.component.css"]
})
export class ResultAreaComponent implements OnInit {
  @Input()
  searchResult: SearchResult;

  constructor() {}

  ngOnInit() {}
}
