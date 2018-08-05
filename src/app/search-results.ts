import { Character } from "./character";

export interface SearchResult {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
