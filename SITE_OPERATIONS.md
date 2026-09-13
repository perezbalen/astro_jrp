# Site Operations

This repository contains both the Astro website and its Obsidian vault. Open `src/content` as the vault. The live site is `https://joserafaelperez.com`, and pushes to `main` deploy through GitHub Pages.

## Working areas

- `src/content/posts`: published articles (`/posts/<id>/`)
- `src/content/pages`: standalone pages (`/<id>/`)
- `src/content/projects`: portfolio entries (`/projects/<id>/`)
- `src/content/special`: copy used by index and utility pages
- `src/content/reference`: Vault CMS/theme reference material; it is not a published content collection
- `src/content/.obsidian`: vault settings and installed plugins
- `src/config.ts`: site identity, navigation, theme, features, and deployment target
- `src/content.config.ts`: frontmatter schemas
- `src/components`, `src/layouts`, `src/pages`, `src/styles`: application code and presentation
- `public`: static files plus generated/synchronized content assets

Astro v5/v6 collection URLs use `entry.id`; do not introduce `entry.slug`. Folder-based content uses `<id>/index.md`. Layouts render the H1 from frontmatter, so note bodies begin at H2.

## Local workflow

Use Node 22 and pnpm 9.12.3. On a fresh checkout:

```powershell
npm install --global pnpm@9.12.3
pnpm install --frozen-lockfile
pnpm run doctor
pnpm run dev
```

The preview is normally at `http://localhost:5000` and falls back to port 5001. Keep Vite filesystem strict mode and the Astro dev toolbar enabled.

## Validation

Run the narrowest relevant check while working:

```powershell
pnpm run doctor
pnpm run check:content
pnpm run check
pnpm run build
```

Before publishing, run `pnpm run verify`. The build synchronizes content assets, regenerates aliases/redirects and graph data, then writes the static site to `dist`. Review generated diffs in `astro.config.mjs` and `public/graph/graph-data.json` before committing.

## Publishing

Publishing is a Git operation: commit the intended vault/code/generated changes and push `main` to `origin`. `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages. Do not push, change DNS, or alter GitHub Pages settings without an explicit request.

## Safe maintenance rules

- Preserve unrelated working-tree changes, especially automatic Obsidian plugin updates.
- Do not edit Markdown under `src/content` without explicit user authorization.
- Use theme tokens/Tailwind theme classes instead of hardcoded UI colors.
- Code that initializes browser behavior must also initialize after Swup page transitions.
- Keep configuration marker comments such as `[CONFIG:...]`; the Obsidian settings plugin depends on them.
- Treat `pnpm-lock.yaml` as authoritative. Do not use `npm install` for project dependencies.
- Upgrade Vault CMS or Astro Modular on a dedicated branch after comparing upstream changes; never run an installer over the personalized site without a recoverable backup.

## Common requests

- New or revised content: update the correct collection and co-locate its assets, then run `pnpm run check:content` and `pnpm run build`.
- Site settings/navigation/theme: update `src/config.ts` without removing config markers, then run `pnpm run verify`.
- Layout or behavior changes: update code, verify initial load and a Swup transition, then run `pnpm run verify`.
- Dependency upgrades: use pnpm, review both manifest and lockfile, and complete a production build.
- Deployment diagnosis: inspect the local build first, then the GitHub Pages workflow run and custom-domain configuration.
