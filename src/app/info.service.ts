import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Character } from "./character";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  private characterUrl = "https://rickandmortyapi.com/api/character";

  getCharacter(id: number): Observable<any> {
    const url = `${this.characterUrl}/${id}`;
    return this.http.get(url);
  }
}
