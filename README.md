# Présentation du projet

Ce document décrit les choix fonctionnels et techniques réalisés dans le cadre de ce projet, ainsi que les principes d’architecture et d’implémentation adoptés.

---

## 🚀 Lancer le projet

Ce projet est une application **Next.js 14** majoritairement orientée **Server Components / SSR**, utilisant **Panda CSS** pour le styling et une stack de tests basée sur **Jest** et **React Testing Library**.

### Prérequis

- **Node.js** ≥ 18
- **npm**

### Installation

```bash
npm install
```

### Démarrage en développement

```bash
npm run dev
```

L’application sera accessible à l’adresse suivante :  
👉 http://localhost:3000

### Build et exécution en production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### Tests

- Lancer tous les tests :

```bash
npm run test
```

- Mode watch :

```bash
npm run test:watch
```

- Générer la couverture de tests :

```bash
npm run test:coverage
```

---

## 1. Conception et roadmap

Le projet a été **conceptualisé en amont**, à la fois sur les plans **fonctionnel** et **technique**, afin de :

- Clarifier les choix d’implémentation
- Anticiper les contraintes techniques
- Définir une **roadmap de développement claire et maîtrisée**

Les commits suivent une convention de nommage explicite : `[FRONTEND-TEST] - N° - Description`, reflétant les étapes de la roadmap définie en amont.

Cette phase de conception permet de limiter les décisions improvisées et de garantir une cohérence globale du projet.

---

## 2. Rendu et stratégie Next.js

Le projet repose sur **Next.js**, avec une volonté assumée de privilégier le **Server-Side Rendering (SSR)** au maximum.

- La majorité des composants sont des **Server Components**
- Les **Client Components** sont volontairement rares et uniquement utilisés lorsque nécessaire

---

## 3. Architecture feature-based

L’architecture du projet suit une **convention feature-based**, organisée autour de trois grandes parties :

- `app`
- `features`
- `shared`

Les domaines fonctionnels sont séparés en **Newsletter** et **User**.

---

## 4. Styling avec Panda CSS

Le projet utilise **Panda CSS** comme solution de styling utilitaire, proche de **Tailwind CSS**, avec des styles typés et générés statiquement.

---

## 5. Scénarios et devtool intégré

Un **devtool intégré** permet de sélectionner des scénarios liés aux newsletters et aux abonnements utilisateurs afin de tester les comportements applicatifs.

---

## 6. Composants purs et composants métier

Les composants UI purs (`Button`, `Card`) sont séparés des composants métier (`NewsletterCard`).  
Le composant `Card` agit comme un wrapper générique.

---

## 7. Gestion du loading et skeletons

Des **skeletons** sont utilisés pour représenter les temps de chargement, notamment via une fonction utilitaire `sleep` et React Suspense.

---

## 8. Choix pragmatiques

Certaines fonctions utilitaires comme `groupBy` ont été implémentées manuellement afin d’éviter des dépendances inutiles.

---

## 9. Tests

Stack de tests :

- Jest
- React Testing Library

Les tests sont organisés avec des blocs `describe` et utilisent des **fixtures prédéfinies**.

---

## 10. TypeScript avancé

- Mode strict activé
- Utilisation de **branded types** (`NewsletterId`, `UserId`, `Email`)

---

## 11. Internationalisation

Système d’i18n centralisé avec structure imbriquée et `as const` pour l’autocomplétion TypeScript.

---

## 12. Gestion des erreurs

- `error.tsx` : error boundary serveur
- `not-found.tsx` : page 404 personnalisée

Le retry réinitialise l’état du scénario.

---

## 13. React Suspense

Utilisation de Suspense avec fallbacks skeleton et clé dynamique pour forcer le rechargement lors d’un changement de scénario.

---

## 14. Server Actions

Les Server Actions permettent de changer les scénarios du devtool : le choix est stocké dans un cookie et la page est revalidée pour appliquer le nouveau scénario. Les query params auraient également été une alternative viable.

---

## 15. Qualité de code

- ESLint (`next/core-web-vitals`)
- Prettier

---

## 16. Barrel exports

Utilisation de fichiers `index.ts` pour centraliser les exports par feature.

---

## 17. Services

Les services exposent une API claire :

- `newsletterService.list()`
- `userService.getCurrent()`

---

## 18. Services mock-aware

Les services vérifient si les mocks sont activés via `isMockEnabled()` afin de basculer facilement entre mock et API réelle.

---

## 19. Séparation fetching / métier

- Services : fetching
- Helpers : logique métier, type guards et règles d’accès

La fonction `hasAccessToNewsletter` autorise l’accès libre si aucune restriction n’est définie.

---

## 20. Améliorations possibles

Avec plus de temps, les évolutions suivantes auraient été envisagées :

- **Tests e2e** : mise en place de Playwright ou Cypress pour valider les parcours utilisateur
- **Gestion d'erreurs enrichie** : try/catch plus robustes dans les services, error boundaries plus granulaires
- **UI/UX** : animations, transitions et polish visuel pour une expérience plus fluide

---

## Conclusion

Le projet met l'accent sur une architecture claire, des choix techniques assumés.
