import {
  Component,
  computed,
  ElementRef,
  inject,
  TemplateRef,
  viewChild,
  ViewChild,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  ThemeEnum,
  ThemeSwitcher,
} from "../../services/theme-switcher.service";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.html",
  styleUrl: "./navigation.css",
  imports: [RouterLink, NgTemplateOutlet],
})
export class Navigation {
  @ViewChild("topnavItems") topnavItems: ElementRef | undefined;
  moon = viewChild<TemplateRef<ElementRef>>("moon");
  sun = viewChild<TemplateRef<ElementRef>>("sun");

  private readonly themeSwitcher = inject(ThemeSwitcher);
  themeIcon = computed(() =>
    this.themeSwitcher.theme() === ThemeEnum.DARK ? this.sun() : this.moon(),
  );

  toggleMenu(e: Event) {
    e.preventDefault();
    if (!this.topnavItems) return;

    this.topnavItems.nativeElement.classList.toggle("navopen");
  }

  toggleTheme() {
    this.themeSwitcher.toggleTheme();
  }
}
