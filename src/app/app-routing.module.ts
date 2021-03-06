import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { SavedComponent } from "./saved/saved.component";
import { CompareComponent } from "./compare/compare.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "saved", component: SavedComponent },
  { path: "compare", component: CompareComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
