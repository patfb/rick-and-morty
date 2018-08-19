import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  private storedCharacterIds: Set<any>;

  constructor() {
    this.storedCharacterIds = new Set();
  }

  save(id: number) {
    this.storedCharacterIds.add(id);
    console.log(this.storedCharacterIds);
  }

  unsave(id: number) {
    this.storedCharacterIds.delete(id);
    console.log(this.storedCharacterIds);
  }

  getAll() {
    let array: number[] = [];
    if (0 !== this.storedCharacterIds.size) {
      array = Array.from(this.storedCharacterIds);
    }
    console.log("saved characters array" + array);
    return array;
  }

  isSaved(id: number): boolean {
    console.log("storage-service isSaved: " + this.storedCharacterIds.has(id));
    return this.storedCharacterIds.has(id);
  }
}
