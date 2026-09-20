# Portfolio

This site implements the approved cinematic scroll narrative using real project captures. Public-facing copy is English. All three project film sections have playable recordings.

## Preview

Run `./start.ps1` in PowerShell, then open http://127.0.0.1:5173/. Keep the terminal running; Ctrl+C stops the server. With Node.js available in PATH, `npm run dev` also works.

Seven pages: Home, Works, Gesture Terrain, Shape of Sound, Fuzzy Boundaries, Systems, About. Unknown URLs have a returnable 404 page.

Home order: introduction → three selected works → practice → supporting systems → about → contact.

Interactions include a unified 420svh home stage, shared-cover route transitions, four recorded gesture/input pairs, a five-mode sound gallery, draggable fuzzy comparison, section anchors, accessible menus and expandable technical evidence. Screenshot transitions never claim to simulate the live projects.

## Media slots

`src/media.mjs` registers source provenance, dimensions, crops and alt text. Home and case covers share an asset identity. Fuzzy mode-comparison captures were checked against the same preset and parameters; its three fuzziness captures keep the source, cluster count and kernel width fixed. Sound images are independent samples, not synchronized audio frames. Gesture Terrain and Shape of Sound currently use archived prototype recordings; Fuzzy Boundaries uses the newer supplied recording. Some Systems evidence retains its original Chinese interface. Existing live works open separately; no camera, microphone, video or audio is automatically started by portfolio pages.

## Development

- `npm run build`: production build.
- `npm test`: rendering, media mapping, final-facing copy, timeline and animation-guard checks.
- `src/Cinematic.jsx`, `src/cinematic-math.mjs`, `src/cinematic.css`: unified home timeline and cinematic layout.
- `src/Media.jsx`, `src/media.mjs`: shared media rendering, display-only cropping and failure fallback.
- `src/App.jsx`: page modules and interactions.
- `src/data.mjs`: project metadata and media briefs.
- `src/content.json`: approved English copy extracted from the workspace draft.
- `src/styles.css`: responsive structural presentation.

Use Node.js 24 and run `npm ci` to install independent dependencies from `package-lock.json`. The site does not require OldPortfolio. `npm run build` generates real HTML entry files for every page and a 404 fallback, so GitHub Pages can serve direct project links without rewrite rules. `npm run verify:pages` checks the generated entries, live works, asset links and deployment size limits.

## GitHub Pages

See [the deployment guide](DEPLOY.zh-CN.md). Publish **this directory only**, with `package.json` and `.github` at the repository root, to a personal-site repository named `<username>.github.io`. This configuration uses the domain root `/`; it is not configured for a `/repository-name/` subpath. The included workflow tests, builds, verifies and deploys on pushes to `main`. Select **GitHub Actions** in Settings → Pages before running it.

Nothing has been published. Full pinned storytelling requires at least 1024×700. Motion off and system reduced-motion preferences remove pinning and continuous drawing; smaller layouts use natural flow and a native horizontal sound gallery. Canvas pauses behind the work stage. Physical-device performance and Safari/Firefox acceptance remain pending; see `../docs/phase-6-cinematic-preview.zh-CN.md` for the initial motion-validation results and `audit-2026-09-20/REPORT.zh-CN.md` for the latest site audit.

Local development-only media QA: append `?media-test=fail` to a portfolio route for deliberate 503 image responses, or `?media-test=slow` for an eight-second image delay. Remove the query for normal viewing. These switches are disabled in production builds; no asset is modified.
