# Hamdouni Mouldi — Portfolio Professionnel

> **Ingénieur Général · Expert Agro-industriel & Développement Agricole**
> Site web vitrine trilingue (Français, العربية, English).

---

## 🌾 Présentation du Projet

Ce projet est le portfolio professionnel interactif de **Hamdouni Mouldi**, retraçant plus de 35 ans d'expertise dans le secteur agricole et agro-industriel tunisien (grandes cultures, machinisme agricole, hydraulique, élevage bovin & avicole, transformation laitière & huilerie, gouvernance des terres domaniales).

### 🌟 Fonctionnalités clés :
- **Carte Interactive de la Tunisie (SVG GeoJSON)** : Visualisation géographique des 7 étapes majeures de sa carrière à travers la Tunisie (Bizerte, Béja, Siliana, Sidi Bouzid, etc.) avec synchronisation bidirectionnelle stepper/carte/modale.
- **Support Trilingue Complet (FR / AR / EN)** : Prise en charge native du mode RTL (Right-to-Left) pour la langue arabe, avec typographies arabes d'exception (*Amiri* & *Cairo*).
- **Design Système Premium** : Vert forêt profond (`#0c2417`), accents or antique (`#c5a059`), fond crème chaud pour la section résultats, et effets glassmorphism soignés.
- **Formulaire de Contact & Galerie** : Formulaire traduit dynamiquement avec validation et retours visuels.

---

## 🚀 Déploiement sur Vercel

Ce projet est un site web statique optimisé (HTML5 / Vanilla CSS / Vanilla JS). Il est prêt pour un déploiement instantané sur Vercel :

1. Poussez ce dépôt sur votre compte **GitHub**.
2. Rendez-vous sur [Vercel](https://vercel.com/) et cliquez sur **"Add New Project"**.
3. Importez votre dépôt GitHub.
4. Laissez les paramètres par défaut (**Framework Preset: Other**, **Root Directory: ./**).
5. Cliquez sur **Deploy** : le site est en ligne en quelques secondes !

---

## 💻 Développement Local

Pour prévisualiser le site localement :

```bash
# Option 1: Serveur Node.js intégré
npm start
# Le site sera accessible sur http://127.0.0.1:3000

# Option 2: Tout autre serveur local (ex: Python)
python -m http.server 3000
```

Pour lancer la suite de tests de validation :
```bash
npm test
```

---

## 📁 Structure du Projet

```text
├── index.html              # Structure HTML5 sémantique principale
├── styles/
│   ├── main.css            # Tokens du design système, typographies & reset
│   └── components.css      # Composants, carte interactive, responsive & RTL
├── scripts/
│   ├── i18n.js             # Dictionnaire de traduction (FR, AR, EN)
│   └── main.js             # Logique d'interaction, carte, modal & formulaire
├── public/                 # Photographies WebP haute définition & assets
├── assets/                 # Images d'archives & médias
└── .gitignore              # Fichiers exclus du versionnement
```
