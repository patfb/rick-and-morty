import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../interfaces/character";
import { SearchResult } from "../interfaces/search-results";

const characterUrl = "https://rickandmortyapi.com/api";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + "/character");
  }

  search(params: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + params);
  }
}
