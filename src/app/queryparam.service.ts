import { Injectable } from "@angular/core";
import { SearchParamater } from "./search-paramater";

@Injectable({
  providedIn: "root"
})
export class QueryParamService {
  constructor() {}

  generateSearchString(input: SearchParamater[]): string {
    let queryString: string = "";

    if (input.length > 0) {
      queryString += "?";
    }

    input.forEach(param => {
      queryString += param.key + "=" + param.value + "&";
    });

    let slicedQueryString = queryString.slice(0, -1);
    console.log("slicedQueryString:" + slicedQueryString);

    return slicedQueryString;
  }
}
