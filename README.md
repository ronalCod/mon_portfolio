# Portfolio — Ronaldo Yonlonfin

Portfolio personnel « bleu nuit », en français, destiné à des recruteurs et à des
clients non techniques. Quatre vues navigables sans rechargement.

Implémentation Angular du handoff de design *« Portfolio de développeur ingénieux »*
(fidélité haute : couleurs, typographies, espacements, animations conformes à la
maquette de référence).

## Écrans

| Route           | Contenu                                                        |
| --------------- | ------------------------------------------------------------- |
| `/`             | Accueil : hero, chiffres, sites réalisés, aperçu du parcours  |
| `/realisations` | Sites livrés pour des clients + projets personnels           |
| `/parcours`     | Frise des expériences, outils, formation, langues            |
| `/contact`      | Bloc bleu nuit : e-mail, téléphone, liens (`mailto:` / `tel:`) |

## Stack

Angular 22 (standalone, signals, zoneless) · `@angular/router` avec lazy-loading ·
SCSS avec variables CSS globales · animations CSS. Aucune API : les contenus sont
des tableaux typés dans `src/app/data/portfolio.data.ts`.

## Thème clair / sombre

Le clair reste le mode canonique du handoff ; le sombre est un ajout qui ne
modifie aucune valeur du clair.

- Palette sombre : bloc `@mixin dark-theme` dans `src/styles.scss`, appliqué via
  `:root[data-theme="dark"]` et `@media (prefers-color-scheme: dark)`.
- `ThemeService` (`src/app/core/theme/`) : signal + `localStorage`, initialisé sur
  la préférence système ; pose `data-theme` sur `<html>` et met à jour
  `meta[name="theme-color"]`.
- Un script inline dans `index.html` applique le thème avant le premier rendu
  (pas de flash).
- Bascule : bouton dans le header (`app-theme-toggle`).

## Développement

```bash
npm install      # legacy-peer-deps déjà activé via .npmrc
npm start        # http://localhost:4200
npm run build    # sortie dans dist/mon_portfolio/browser
```

> `npm install` **doit** utiliser `legacy-peer-deps` (bug npm 10.9 sur la
> résolution des peers de vitest). C'est déjà forcé par `.npmrc`.

## Structure

```
src/app/
├── app.ts / app.html / app.scss   → shell : header sticky + <router-outlet> + footer
├── app.routes.ts                  → '' | realisations | parcours | contact
├── core/nav/                      → navigation en pastilles (routerLinkActive)
├── data/portfolio.data.ts         → tous les contenus + SITE_CONFIG (afficher le téléphone)
├── shared/
│   ├── project-card/              → carte réalisation (liseré brique)
│   ├── timeline-row/              → ligne d'expérience
│   ├── formation-card/            → carte diplôme
│   └── language-block/            → langue + jauge 5 segments
└── pages/                         → accueil / realisations / parcours / contact
```

Les tokens de design (couleurs, polices, formes, easing) sont déclarés en
variables CSS dans `src/styles.scss`.

## Assets (`public/`)

- `ronaldo.webp` / `ronaldo.jpg` — portrait de l'accueil (cercle). Pour le
  changer, remplacer les deux fichiers (carré, ~560 px).
- `cv-ronaldo-yonlonfin.pdf` — CV téléchargé par le bouton « Télécharger le CV »
  de l'accueil ; nom de fichier référencé par `IDENTITY.cv` dans
  `src/app/data/portfolio.data.ts`.
- `favicon.ico` (16/32/48), `favicon-32.png`, `favicon-192.png`,
  `apple-touch-icon.png` — le portrait recadré en cercle. Regénérés depuis la
  photo source avec ImageMagick (crop circulaire + `-define
  icon:auto-resize=16,32,48`).

## À faire valider avant mise en ligne

Rédigés faute d'information précise (voir handoff) :

- les lignes « Mon rôle : … » des quatre sites clients ;
- les phrases d'usage de la section Langues.

Configurer aussi `SITE_CONFIG.showPhone` (`src/app/data/portfolio.data.ts`) pour
masquer/afficher le numéro de téléphone.

## Déploiement — Vercel

`vercel.json` configure le framework, la commande de build, le dossier de sortie et
le fallback SPA.

```bash
npm i -g vercel
vercel          # préversion
vercel --prod   # production
```

Ou : importer le dépôt sur https://vercel.com/new (configuration automatique).
