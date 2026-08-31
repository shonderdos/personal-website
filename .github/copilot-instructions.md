# Copilot Instructions for Personal Website

This is an Angular 22 single-page application with server-side rendering (SSR), using standalone components, Vitest for testing, and Prettier for formatting.

## Build, Test & Dev Commands

### Development
- **Start dev server:** `npm start` (runs on http://localhost:4200/)
- **Watch mode build:** `npm run watch` (rebuilds on file changes, development configuration)

### Production
- **Build production:** `npm run build` (creates optimized output in `dist/`)
- **Serve SSR build:** `npm run serve:ssr:personal-website` (starts Node.js server with prerendered pages)

### Testing
- **Run all tests:** `npm test`
- **Run single test file:** `npm test -- src/app/app.spec.ts`
- **Run tests matching pattern:** `npm test -- home` (runs tests containing "home")
- **Watch tests during development:** `npm test -- --watch` (continuous test runner)

### Code Quality
- **Format code:** `npx prettier --write .` (Prettier is configured but no lint script exists)

## Architecture

### Component Structure
- **Standalone components:** All components use `@Component()` decorator with `imports` array (no NgModules)
- **File organization:** Each component lives in its own folder with three co-located files:
  - `component-name.ts` - class definition
  - `component-name.html` - template
  - `component-name.css` - component styles
- **Selector naming:** Lowercase kebab-case with `app-` prefix (e.g., `app-home`, `app-navigation`)
- **Template reference:** Use `templateUrl` and `styleUrls` (array) to reference external files

### Routing
- **Definition:** `src/app/app.routes.ts` defines all application routes
- **Entry point:** `app.ts` root component uses `RouterOutlet` to render routed components
- **Current routes:** Home (path: ""), Experiences, Contact, About Me

### State Management
- **Signals:** Use Angular signals for reactive state management (e.g., `signal<T>()`, `effect()`)
- **Example:** `ThemeSwitcher` service uses signals to manage theme state across the app
- **Browser APIs:** Use `isPlatformBrowser()` guard before accessing `localStorage`, `window`, or `document` for SSR compatibility

### Services
- **Injection:** Services use `@Injectable({ providedIn: 'root' })` for application-wide singletons
- **Dependency injection:** Use `inject()` function in service classes (not constructor injection)
- **Reactive patterns:** Services should use signals and effects for reactive behavior

### Server-Side Rendering (SSR)
- **Configuration:** `src/server.ts` is the SSR entry point; `src/main.server.ts` is the platform server setup
- **Output mode:** `outputMode: "static"` in `angular.json` means pages are pre-rendered at build time
- **Platform awareness:** Always check `isPlatformBrowser()` before using browser-only APIs

## Key Conventions

### TypeScript
- **Strict mode enabled:** All TypeScript compiler strict options are on (`strict: true`)
- **Decorators:** Use `@Component`, `@Injectable` from `@angular/core`
- **Imports:** Use ES2022 modules; Angular CLI handles module resolution

### Testing
- **Framework:** Vitest (configured via Angular CLI's `@angular/build:unit-test`)
- **Setup:** Tests use `TestBed` from `@angular/core/testing` for component/service testing
- **File naming:** `*.spec.ts` files co-located with components/services
- **Example pattern:** Use `TestBed.configureTestingModule()` to configure test imports, then `TestBed.createComponent()` to create component fixtures

### Component Patterns
- **Imports array:** Always declare imported components, directives, and pipes in `@Component({ imports: [...] })`
- **CSS encapsulation:** Component styles are scoped to that component by default
- **Lifecycle:** Use Angular lifecycle hooks (e.g., `OnInit`, `OnDestroy`) if needed

### Naming Conventions
- **Classes:** PascalCase (e.g., `ThemeSwitcher`, `Home`)
- **Files:** kebab-case matching class name lowercased (e.g., `theme-switcher.service.ts`, `home.ts`)
- **Variables/methods:** camelCase
- **Constants:** SCREAMING_SNAKE_CASE for app constants (e.g., enum values)

### Prettier Formatting
- **No custom ESLint:** Project uses Prettier only for code formatting (no linter enforcing rules)
- **Format before committing:** Run `npx prettier --write .` or format changed files to maintain consistency

### Environment & Dependencies
- **Package manager:** npm@10.9.3 (as specified in package.json)
- **Node version:** Ensure compatibility with Angular 22 (typically Node 18+)
- **Major dependencies:** Angular 22.x, RxJS 7.8, Express 5.x (for SSR)

## Common Tasks

### Create a new component
```bash
ng generate component components/component-name
```
This scaffolds a standalone component with `.ts`, `.html`, and `.css` files.

### Create a new service
```bash
ng generate service services/service-name
```
This scaffolds a service with `@Injectable({ providedIn: 'root' })`.

### Add a route
1. Create the component (see above)
2. Import it in `src/app/app.routes.ts`
3. Add a route entry: `{ path: "route-path", component: ComponentName }`

### Debug SSR issues
- Development runs with client-side rendering by default via `ng serve`
- For SSR testing, build and run: `npm run build && npm run serve:ssr:personal-website`
- Check `src/server.ts` for Express middleware configuration
