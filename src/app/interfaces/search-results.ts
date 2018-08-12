import { Character } from "./character";
import { Info } from "./info";

export interface SearchResult {
  info: Info;
  results: Character[];
}
