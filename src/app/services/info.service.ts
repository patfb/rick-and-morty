import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchResult } from "../interfaces/search-results";

const characterUrl = "https://rickandmortyapi.com/api";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getCharacters(page?: string): Observable<SearchResult> {
    if (page) {
      return this.http.get<SearchResult>(
        characterUrl + "/character" + `?${page}`
      );
    } else {
      return this.http.get<SearchResult>(characterUrl + "/character");
    }
  }

  search(params: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + params);
  }

  getDifferentPage(fullPageUrl: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(fullPageUrl);
  }
}
