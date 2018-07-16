import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CharacterDetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
