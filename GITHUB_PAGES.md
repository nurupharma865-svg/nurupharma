# GitHub Pages — NuruPharma

## Structure
The contents of this folder must be at the ROOT of the repository, not inside a `project/` subfolder.

## GitHub setting
Repository → Settings → Pages → Build and deployment → Source: **GitHub Actions**

## Deploy
Push to `main`. The workflow `.github/workflows/deploy.yml` runs `npm ci`, `npm run build`, uploads `dist/`, then deploys it.

Expected URL:
https://nurupharma865-svg.github.io/nurupharma/

## Important
Do not configure Pages to deploy from `main / (root)` or `main /docs` for this Vite setup. The workflow must deploy the generated `dist` artifact.
