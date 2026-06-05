import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./app.css",
})
export class App {
  @ViewChild("topnavItems") topnavItems: ElementRef | undefined;
  toggleMenu(e: Event) {
    e.preventDefault();
    if (!this.topnavItems) return;

    this.topnavItems.nativeElement.classList.toggle("navopen");
  }
}
