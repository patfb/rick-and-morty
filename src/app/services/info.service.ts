import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchResult } from "../interfaces/search-results";
import { QueryParamService } from "./queryparam.service";
import { Character } from "../interfaces/character";

const characterUrl = "https://rickandmortyapi.com/api/character";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(
    private http: HttpClient,
    private queryParamService: QueryParamService
  ) {}

  getCharacters(page?: number): Observable<SearchResult> {
    if (page) {
      return this.http.get<SearchResult>(characterUrl + `?page=${page}`);
    } else {
      return this.http.get<SearchResult>(characterUrl);
    }
  }

  search(params: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + params);
  }

  getPage(pageNumber: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + `?page=${pageNumber}`);
  }

  getDifferentPage(fullPageUrl: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(fullPageUrl);
  }

  getSavedCharacters(characterIds: number[]): Observable<Character[]> {
    return this.http.get<Character[]>(characterUrl + "/" + characterIds);
  }
}
