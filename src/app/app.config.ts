import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withEventReplay,
  withNoIncrementalHydration,
} from "@angular/platform-browser";
import { ThemeSwitcher } from "./services/theme-switcher.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    provideAppInitializer(() => {
      const themeSwitcher = inject(ThemeSwitcher);
      return themeSwitcher.init();
    }),
  ],
};
