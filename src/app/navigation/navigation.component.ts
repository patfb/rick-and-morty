import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  navLinks: any[] = [];

  constructor() {
    this.navLinks.push({
      path: "/home",
      label: "Home"
    });
    this.navLinks.push({
      path: "/search",
      label: "Search"
    });
    this.navLinks.push({
      path: "/saved",
      label: "Saved"
    });
    this.navLinks.push({
      path: "/compare",
      label: "Compare"
    });
  }

  ngOnInit() {}
}
