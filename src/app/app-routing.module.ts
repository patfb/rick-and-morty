import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: "home", component: CharacterDetailComponent },
  { path: "search", component: SearchComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
