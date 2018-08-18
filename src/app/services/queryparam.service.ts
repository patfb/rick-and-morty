import { Injectable } from "@angular/core";
import { SearchParamater } from "../interfaces/search-paramater";

@Injectable({
  providedIn: "root"
})
export class QueryParamService {
  constructor() {}

  generateSearchString(input: SearchParamater[]): string {
    let queryString = "";

    if (input.length > 0) {
      queryString += "?";
    }

    input.forEach(param => {
      queryString += param.key + "=" + param.value + "&";
    });

    const slicedQueryString = queryString.slice(0, -1);

    return slicedQueryString;
  }

  arrayToQueryString(characterIds: number[]): string {
    let queryString: string = "/";

    characterIds.forEach(id => {
      queryString += id + ",";
    });

    return queryString.slice(0, -1);
  }
}
