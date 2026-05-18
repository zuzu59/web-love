# Guide technique

## Objectif

Cette application affiche une carte romantique et reagit au clic sur le coeur avec une animation de petales.

## Flux de l'interface

1. `src/main.js` injecte le markup principal dans `#app`
2. `src/style.css` applique le style de la scene, de la carte et du bouton coeur
3. Un gestionnaire d'evenement sur le bouton declenche `launchPetals()`
4. `launchPetals()` active le fond, le flash et la generation des petales

## Animation des petales

- Chaque petale est cree comme un `span`
- Des variables CSS sont assignees a chaque instance pour varier taille, duree et trajectoire
- L'animation CSS `petal-fly` gere le mouvement et la disparition
- Les elements sont ensuite retires du DOM avec `setTimeout`

## Points d'extension

- Modifier le nombre de petales dans `launchPetals()`
- Ajuster les couleurs dans `src/style.css`
- Changer le texte principal dans `src/main.js`
- Ajouter un son ou une seconde animation lors du clic

## Verification

- `npm run build` permet de verifier que l'application est valide pour la production
