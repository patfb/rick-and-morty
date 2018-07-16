import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Character } from "./character";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  private characterUrl = "https://rickandmortyapi.com/api/character";

  getCharacter(id: number): Observable<Character> {
    const url = `${this.characterUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  getCharacters(charactersToGet: number[]): Observable<Character[]> {
    const url = `${this.characterUrl}/${charactersToGet}`;
    return this.http.get<Character[]>(url);
  }
}
