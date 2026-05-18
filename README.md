# WEB-LOVE

Mini site Vite romantique avec un gros coeur cliquable et une pluie de pétales.

## Apercu

- La page affiche un message principal: `Je t'aime beaucoup`
- Le bouton central prend la forme d'un coeur avec le texte `Mon amour !`
- Au clic, l'arriere-plan change et une explosion de petales de roses apparait

## Demarrer

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichee par Vite, en general `http://localhost:5173/`.

## Construire pour la production

```bash
npm run build
```

Pour lancer un apercu local du build:

```bash
npm run preview
```

## Arborescence

- `index.html` : point d'entree HTML
- `src/main.js` : rendu de la page et logique de l'animation
- `src/style.css` : style general, coeur, fond et petales

## Comportement

- Un clic sur le coeur declenche un flash visuel
- Une serie de petales est ensuite generee en JavaScript
- Les petales sont supprimes automatiquement apres leur animation

## Notes techniques

- Projet base sur Vite en mode JavaScript vanille
- Aucune dependance runtime
- La structure est volontairement simple pour faciliter les ajustements
