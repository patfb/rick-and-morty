import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "./character";
import { SearchResult } from "./search-results";

const characterUrl = "https://rickandmortyapi.com/api/character";
const placeholderUrl = "https://jsonplaceholder.typicode.com";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getCharacter(id: number): Observable<Character> {
    const url = `${characterUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  getCharacters(charactersToGet: number[]): Observable<Character[]> {
    const url = `${characterUrl}/${charactersToGet}`;
    return this.http.get<Character[]>(url);
  }

  search(): Observable<SearchResult> {
    let params = new HttpParams().set("name", "rick");
    return this.http.get<SearchResult>(characterUrl, {
      params
    });
  }
}
