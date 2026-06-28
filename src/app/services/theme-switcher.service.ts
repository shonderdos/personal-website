import { isPlatformBrowser } from "@angular/common";
import {
  DOCUMENT,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from "@angular/core";

type Theme = "light" | "dark";
export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

@Injectable({ providedIn: "root" })
export class ThemeSwitcher {
  private readonly DEFAULT_THEME: Theme = ThemeEnum.DARK;
  private readonly DOCUMENT = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly selectedTheme = signal<Theme>(this.DEFAULT_THEME);

  constructor() {
    this.applyStoredTheme();
  }

  get theme() {
    return this.selectedTheme.asReadonly();
  }

  private applyStoredTheme() {
    effect(() => {
      const selectedTheme = this.selectedTheme();
      if (isPlatformBrowser(this.platformId)) {
        this.DOCUMENT.defaultView?.localStorage.setItem("theme", selectedTheme);
      }

      this.DOCUMENT.documentElement.removeAttribute("data-theme");
      this.DOCUMENT.documentElement.setAttribute("data-theme", selectedTheme);
    });
  }

  private sanitizeTheme(theme: string | null): Theme {
    if (theme === ThemeEnum.LIGHT || theme === ThemeEnum.DARK) {
      return theme;
    }
    return this.DEFAULT_THEME;
  }

  public toggleTheme() {
    const newTheme =
      this.selectedTheme() === ThemeEnum.DARK
        ? ThemeEnum.LIGHT
        : ThemeEnum.DARK;
    this.selectedTheme.set(newTheme);
  }

  public init() {
    let storedTheme = null;
    if (isPlatformBrowser(this.platformId)) {
      storedTheme = localStorage.getItem("theme") as Theme | null;
    }
    const sanitizedTheme = this.sanitizeTheme(storedTheme);

    this.selectedTheme.set(sanitizedTheme);
  }
}
