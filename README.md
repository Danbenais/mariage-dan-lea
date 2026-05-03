# Mariage Dan & Léa — Page Post-RSVP

Page web élégante affichée après confirmation de présence au mariage.

**Date** : Mardi 2 juin 2026
**Lieu** : Salons Palace de Villiers — 12 bis Avenue des Entrepreneurs, 95400 Villiers-le-Bel

## Fonctionnalités

- ✨ Design élégant bleu nuit / doré, fidèle au faire-part
- 📅 Ajout à l'agenda (Google Calendar, Apple Calendar, Outlook, Yahoo)
- 🗺️ Itinéraire pré-rempli (Waze + Google Maps)
- 🎁 Lien vers la liste de mariage Amazon
- 📱 Responsive (mobile, tablette, desktop)
- ♿ Accessible (ARIA, prefers-reduced-motion)

## Structure

```
mariage-dan-lea/
├── index.html       → page principale
├── styles.css       → styles
├── script.js        → interactions
├── event.ics        → fichier calendrier (Apple/Outlook)
└── README.md
```

## Avant la mise en ligne

### 1. Mettre à jour le lien Amazon Wishlist

Ouvre `script.js` ligne 22 :

```js
const WISHLIST_URL = "https://www.amazon.fr/hz/wishlist/ls/PLACEHOLDER";
```

Remplace par l'URL réelle de la liste Amazon.

### 2. (Optionnel) Modifier les infos de l'événement

Toujours dans `script.js`, l'objet `EVENT` en haut du fichier centralise toutes les données.

## Déploiement

### Option A — Vercel via GitHub (recommandé)

1. Crée un nouveau repo sur GitHub (ex: `mariage-dan-lea`)
2. Push le contenu de ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/mariage-dan-lea.git
   git push -u origin main
   ```
3. Va sur [vercel.com/new](https://vercel.com/new), importe le repo
4. Vercel détecte un site statique et déploie automatiquement
5. Tu peux configurer un domaine custom dans **Settings → Domains**

### Option B — Vercel CLI direct

```bash
npm i -g vercel
vercel
```

### Option C — Test local

Ouvre simplement `index.html` dans ton navigateur, ou avec un serveur local :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Personnalisation rapide

| Élément | Fichier | Où chercher |
|---|---|---|
| Couleurs | `styles.css` | `:root` (variables CSS) |
| Date / heure / lieu | `script.js` + `event.ics` | objet `EVENT` |
| Texte d'accueil | `index.html` | section `.hero` |
| Citation hébraïque | `index.html` | section `.footer` |
| Animations | `styles.css` | section `@keyframes` |

## Notes techniques

- Pas de framework, pas de build : HTML/CSS/JS pur, déploiement instantané
- Fonts via Google Fonts (Cormorant Garamond, Italianno, Inter)
- Les fichiers `.ics` fonctionnent sur tous les calendriers compatibles iCal
- Le lien Google Calendar est généré dynamiquement via l'API URL standard

---

🥂 *Mazal Tov !*
