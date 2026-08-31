# Ivoire Pool — site vitrine

Intégration **React + Vite + TypeScript + Tailwind CSS v4** de la maquette Figma **« Ivoire Pool »**, responsive (mobile / tablette / desktop) avec animations d'apparition au scroll, carrousel de projets, accordéon FAQ et menu mobile.

## 🌐 Démo en ligne

Le site est disponible en ligne :

👉 **[Voir le site déployé](https://blanchepiscinisteivoirepool.vercel.app/)**

`https://blanchepiscinisteivoirepool.vercel.app/`

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:5173.

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  assets/images/     # Visuels exportés depuis le fichier Figma d'origine
  components/        # Un composant par section de la page
  hooks/useReveal.ts # Hook d'apparition au scroll (IntersectionObserver)
  index.css          # Design tokens Tailwind v4 (@theme) + styles globaux
  App.tsx            # Assemblage des sections
```
