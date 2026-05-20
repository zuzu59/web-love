# WEB-LOVE

Mini site Vite romantique avec un gros coeur cliquable et une explosion de pétales de roses.

## Aperçu

- L’écran d’accueil affiche un gros coeur avec le texte `Mon amour !`
- Au clic, la page bascule sur un fond romantique avec le message `Je t'aime beaucoup`
- Une explosion de pétales se déclenche au centre de l’écran

## Démarrage

Installer les dépendances puis lancer le serveur de développement :

```bash
npm install
npm run dev
```

Ouvre ensuite l’URL fournie par Vite, en général `http://localhost:5173/`.

## Build

Créer la version de production :

```bash
npm run build
```

Prévisualiser le build localement :

```bash
npm run preview
```

## Fonctionnement

- Le clic sur le coeur déclenche un flash visuel
- La scène d’accueil disparaît au profit de la nouvelle page
- Des pétales sont générés en JavaScript avec des tailles et trajectoires variées
- Les pétales sont automatiquement retirés après leur animation

## Structure

- `index.html` : point d’entrée HTML
- `src/main.js` : rendu de l’interface et logique de l’animation
- `src/style.css` : styles de l’accueil, de la nouvelle page et des pétales

## Notes

- Projet basé sur Vite avec JavaScript vanille
- Aucune dépendance runtime
- Structure volontairement simple pour faciliter les ajustements visuels
