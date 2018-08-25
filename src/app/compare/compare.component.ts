import { Component, OnInit } from "@angular/core";
import { DiffCheckerService } from "../services/diff-checker.service";

@Component({
  selector: "app-compare",
  templateUrl: "./compare.component.html",
  styleUrls: ["./compare.component.css"]
})
export class CompareComponent implements OnInit {
  firstText: string;
  secondText: string;
  isTextTheSame: boolean;

  constructor(private diffChecker: DiffCheckerService) {
    this.firstText = "";
    this.secondText = "";
    this.isTextTheSame = false;
  }

  ngOnInit() {}

  compare() {
    this.isTextTheSame = this.diffChecker.checkDiff(
      this.firstText,
      this.secondText
    );
  }

  resetInput() {
    this.firstText = "";
    this.secondText = "";
    this.isTextTheSame = false;
  }
}
