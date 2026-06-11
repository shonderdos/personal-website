import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.html",
  styleUrl: "./navigation.css",
  imports: [RouterLink],
})
export class Navigation {
  @ViewChild("topnavItems") topnavItems: ElementRef | undefined;
  toggleMenu(e: Event) {
    e.preventDefault();
    if (!this.topnavItems) return;

    this.topnavItems.nativeElement.classList.toggle("navopen");
  }
}
