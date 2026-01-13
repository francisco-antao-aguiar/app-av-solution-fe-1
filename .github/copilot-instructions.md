# Copilot Instructions for AV-SOLUTION-FE-1

## Project Overview
Angular 21 standalone SPA (Single Page Application) using modern, signal-based components. The app serves as a frontend for an AV (audio-visual) solution with a backend API running on `http://localhost:8080`.

## Tech Stack
- **Framework**: Angular 21 (standalone components, no NgModules)
- **Language**: TypeScript 5.9 with strict mode enabled
- **Testing**: Vitest 4.0.8 (not Jasmine)
- **Styling**: Tailwind CSS 4.1 with PostCSS 8.5
- **CLI**: Angular CLI 21.0.5
- **Package Manager**: npm 11.6.2

## Project Structure
- `src/main.ts`: Bootstrap entry point
- `src/app/app.ts`: Root standalone component with RouterOutlet
- `src/app/app.config.ts`: Application configuration (providers, routing)
- `src/app/app.html`: Root component template (currently placeholder content)
- `src/app/app.routes.ts`: Route definitions (file referenced but missing from current structure)
- `public/`: Static assets (served from build via browser array in angular.json)
- `src/styles.css`: Global styles with Tailwind import

## Critical Patterns

### Angular Standalone Components
All components use standalone pattern (no NgModules):
```typescript
@Component({
  selector: 'app-component',
  imports: [CommonModule, ...],  // Explicit imports required
  templateUrl: './component.html',
  styleUrl: './component.css'
})
export class ComponentName { }
```

### Signals & Reactivity
Components use Angular signals for state management:
```typescript
protected readonly title = signal('Initial Value');
```
Always use `signal()` for component state, not class properties.

### TypeScript Configuration
- Strict mode: `true` (catches null/undefined issues)
- `noImplicitOverride`: true (override keywords required in inheritance)
- `noPropertyAccessFromIndexSignature`: true (strict property access)
- `noImplicitReturns`: true (all code paths must return)
- Target: ES2022

## Development Workflows

### Start Dev Server
```bash
npm start
```
Runs `ng serve --proxy-config proxy.conf.json` on `http://localhost:4200`. Proxy routes `/hello-world/*` to `http://localhost:8080`.

### Build
```bash
npm run build
```
Production build with optimizations (output in `dist/`).

### Testing
```bash
npm test
```
Vitest runner. Test file pattern: `*.spec.ts`. Uses `TestBed.configureTestingModule()` to configure component dependencies.

### Code Generation
```bash
ng generate component page-name
```
Generates standalone component with imports, template, and styles.

## Proxy & Backend Integration
- **Config**: [proxy.conf.json](proxy.conf.json) routes `/hello-world` to localhost:8080
- **In Development**: Backend expected at `http://localhost:8080`
- **Header Logging**: Proxy logs headers at debug level for troubleshooting

## Build Constraints
- **Initial Bundle Budget**: 500 KB (warning), 1 MB (error)
- **Component Style Budget**: 4 KB (warning), 8 KB (error)
- **Output Hashing**: Enabled in production
- **Assets**: All files from `public/` directory included in build

## Common Tasks

### Add a New Component
```bash
ng generate component components/component-name
```
Remember: Include required imports in standalone component declaration.

### Add Route
Edit `src/app/app.routes.ts` (currently missing but referenced in app.config.ts). Should use lazy loading pattern:
```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'path', loadComponent: () => import('./component').then(m => m.ComponentName) }
];
```

### Style Components
- Use Tailwind CSS classes in templates
- Component-scoped CSS in `component.css` (viewEncapsulation applied automatically)
- Global styles in `src/styles.css`
- Ensure inline styles + component CSS don't exceed 8 KB per component

## Code Quality
- **Strict TypeScript**: Never ignore type errors with `any`. Use `as unknown as Type` only if unavoidable.
- **Decorators**: Use `@Component`, `@Injectable`, `@Directive` appropriately
- **RxJS**: Included as dependency (v7.8.0) but Angular signals preferred for component state
- **Error Handling**: App provides global error listener via `provideBrowserGlobalErrorListeners()` in config

## Key Files Reference
- [src/main.ts](src/main.ts) - Bootstrap
- [src/app/app.ts](src/app/app.ts) - Root component
- [src/app/app.config.ts](src/app/app.config.ts) - Providers & routing
- [src/styles.css](src/styles.css) - Global Tailwind setup
- [angular.json](angular.json) - Build configuration
- [tsconfig.json](tsconfig.json) - TypeScript strict config
