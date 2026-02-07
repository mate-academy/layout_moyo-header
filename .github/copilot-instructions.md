<!-- Purpose: guide AI coding agents to be immediately productive in this repo -->
# Copilot / Agent instructions

Purpose: short, actionable notes for an AI agent working on this layout project.

- **Project type**: static layout exercise (Mate Academy). Source files live in `src/` and a minimal root `index.html` exists for quick checks.
- **Key files**: [readme.md](readme.md#L1), [package.json](package.json#L1), [backstopConfig.js](backstopConfig.js#L1), [src/index.html](src/index.html#L1), [src/style.css](src/style.css#L1), [backstop_data/engine_scripts/puppet/onReady.js](backstop_data/engine_scripts/puppet/onReady.js#L1).

Architecture & intent
- This is a single-page layout project: HTML + CSS with pixel-perfect visual regression tests. No app runtime or API layers.
- Source: `src/` contains the working HTML/CSS and `src/images` for assets. Build/dev tooling is provided by `@mate-academy/scripts` (see `package.json` scripts).
- Visual tests: `backstopConfig.js` configures BackstopJS scenarios that target DOM selectors (e.g., `header`, `nav`, `[data-qa="hover"]`, `a.is-active`). Tests rely on specific markup and CSS states.

Developer workflows (discoverable)
- Install: `npm install` (CI does this in [.github/workflows/test.yml](.github/workflows/test.yml#L1)).
- Preview: `npm start` (runs `mate-scripts start`). If not available, open `src/index.html` in a browser.
- Build: `npm run build` (calls `mate-scripts build`).
- Test: `npm test` runs formatting + lints and `mate-scripts test`; CI runs `npm test` and uploads `backstop_data` as an artifact.
- Format: `npm run format` targets `./src/**/*.{html,css,scss}` (see `package.json` format script).

Project-specific conventions and patterns
- Pixel-perfect header: follow the README checklist precisely. Example expectations in `readme.md`:
  - Use semantic tags (`<header>`, `<nav>`) and `src/images` for the logo.
  - The blue active link must have class `is-active` (Backstop scenario targets `a.is-active`).
  - Add `data-qa="hover"` to the 4th link (Backstop hover scenario).
  - Do not use `gap` for spacing; use margins for compatibility with tests.
  - Header height must be set in one place (for links), content vertically centered.
  - Use a CSS variable for the project blue color.

Testing and integration notes
- Backstop targets selectors and interactions defined in `backstopConfig.js`. Keep those selectors stable when changing markup.
- Puppet helper scripts live under `backstop_data/engine_scripts/puppet/` and may be referenced in `backstopConfig.js` (`onBeforeScript`, `onReadyScript`).
- CI uploads `backstop_data` so visual diffs are available in PR artifacts.

Editing guidance for agents
- Prefer small, atomic changes that preserve selectors used by Backstop scenarios.
- When adding classes/attributes required by tests, mirror exact names: `is-active`, `data-qa="hover"`.
- Keep font inclusion strict: README demands Roboto roman, weight 500 — ensure the Google Fonts link matches that requirement.
- Run `npm run format` before tests to match formatting conventions.

When unsure
- Re-check these files for intent: [readme.md](readme.md#L1), [backstopConfig.js](backstopConfig.js#L1), [package.json](package.json#L1).
- If changing test targets, update `backstopConfig.js` and ensure puppet scripts in `backstop_data/engine_scripts/puppet/` still apply.

If you make changes, ask the human: "Do you want me to run `npm test` locally or push changes first?"
