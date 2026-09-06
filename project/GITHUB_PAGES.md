# Déploiement GitHub Pages

Le projet est configuré pour le dépôt `nurupharma865-svg/nurupharma`.

## 1. Envoyer ces fichiers
Copier le contenu de ce dossier à la racine du dépôt GitHub (le fichier `package.json` doit être à la racine).

## 2. GitHub Pages
Dans GitHub : **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## 3. Déploiement
Chaque push sur `main` déclenche `.github/workflows/deploy.yml`. Le workflow construit `dist/` puis le publie avec GitHub Pages.

## 4. URL attendue
`https://nurupharma865-svg.github.io/nurupharma/`

## 5. Pourquoi `main.tsx` ne doit plus être demandé directement
Vite transforme `/src/main.tsx` en fichier JavaScript compilé dans `dist/assets/` pendant `npm run build`. Le workflow déploie `dist/`, et non les sources.
