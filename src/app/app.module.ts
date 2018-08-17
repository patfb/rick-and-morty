import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatProgressBarModule,
  MatDividerModule,
  MatTooltipModule,
  MatSliderModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationComponent } from "./navigation/navigation.component";
import { SearchComponent } from "./search/search.component";
import { CurrentPagePipe } from "./pipes/current-page.pipe";
import { HomeComponent } from "./home/home.component";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { ResultAreaComponent } from "./result-area/result-area.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavigationComponent,
    CurrentPagePipe,
    CharacterCardComponent,
    ResultAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSliderModule,
    MatTooltipModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
