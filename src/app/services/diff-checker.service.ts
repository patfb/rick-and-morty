import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DiffCheckerService {
  constructor() {}

  checkDiff(input1: string, input2: string): boolean {
    // const input1NoBreaks = input1.replace(/(\r\n\t|\n|\r\t)/gm, "");
    // const input2NoBreaks = input2.replace(/(\r\n\t|\n|\r\t)/gm, "");
    if (input1 !== "" && input2 !== "" && input1 === input2) {
      return true;
    } else {
      return false;
    }
  }
}
