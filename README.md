# 🌍 Carbon Footprint Analyzer - Production Ready

## Application d'Analyse du Bilan Carbone GHG Protocol

Analyse complète et interactive de l'empreinte carbone des entreprises tunisiennes avec support de **93 activités d'émission** réparties en 3 scopes.

---

## ✨ Features Complètes

### 📊 93 Activités d'Émission

- **Scope 1 (19 activités):** Émissions directes
  - 11 Combustibles fossiles
  - 4 Gaz réfrigérants
  - 4 Processus industriels

- **Scope 2 (6 activités):** Énergie achetée
  - Électricité (Tunisie & International)
  - Chauffage/Refroidissement urbain
  - Vapeur

- **Scope 3 (68 activités):** Émissions indirectes
  - Approvisionnement (9)
  - Équipement (5)
  - Transport amont/aval (8)
  - Déchets (6)
  - Déplacements professionnel & domicile-travail (16)
  - Actifs loués (4)
  - Transformation & Utilisation produits (4)
  - Fin de vie (3)
  - Franchises & Investissements (3)
  - Catégories transversales (8)

### 📈 Graphiques & Visualisations

- **Distribution par Scope:** Pie chart
- **Comparaison Émissions:** Bar chart
- Résultats détaillés par catégorie
- Analyse de sensibilité (±50%)

### 💡 Rapports & Recommandations

- Recommandations personnalisées par scope
- Plan d'action stratégique
- Résumé exécutif
- Export en PDF/CSV

### 🎨 Interface Utilisateur

- Thème clair/sombre élégant
- Animation "Shooting stars"
- Design responsif (mobile, tablette, desktop)
- Profil utilisateur avec image intégrée
- Code QR vers portfolio

---

## 🚀 Déploiement GitHub Pages

### Prérequis
- Compte GitHub
- Git installé localement

### Étapes de Déploiement

#### 1. Cloner/Créer le Repository
```bash
git clone (https://github.com/mohamedayoub97/Carbon-analyzer.git)
cd carbon-analyzer
```

#### 2. Structure des Fichiers
```
carbon-footprint-analyzer/
├── index.html           # Application principale
├── styles.css          # Styles complets
├── app.js              # Logique & données (93 activités)
├── README.md           # This file
├── .nojekyll           # Bypass Jekyll
└── .gitignore          # Git config
```

#### 3. Pousser vers GitHub
```bash
git add .
git commit -m "Deploy Carbon Footprint Analyzer v1.0 - Production Ready"
git push origin main
```

#### 4. Activer GitHub Pages
1. Aller à Settings → Pages
2. Source: Select `main` branch
3. Cliquer Save
4. Attendre 2-3 minutes

#### 5. Accéder à l'Application
```
https://mohamedayoub97.github.io/carbon-footprint-analyzer
```

---

## 📋 Fonctionnalités Détaillées

### Entrées Tab
- Saisie des quantités par activité
- Support de tous les 93 émetteurs
- Unités spécifiques (litre, kg, m³, kWh, etc.)
- Interface intuitive avec catégorisation

### Facteurs Tab
- Facteurs d'émission personnalisables
- Table complète éditable
- Données IEA 2020

### Résultats Tab
- **Distribution par Scope:** Deux graphiques (pie + bar)
- Résultats détaillés par catégorie
- Analyse de sensibilité interactive

### Rapports Tab
- Recommandations basées sur les données
- Plan d'action détaillé
- Résumé exécutif
- Export CSV & Texte

### Aide Tab
- FAQ avec explications Scope 1/2/3
- Guide d'utilisation
- Informations méthodologiques

---

## 🔐 Sécurité & Confidentialité

✅ **100% Offline**
- Aucune transmission de données
- Calculs locaux uniquement
- Aucun tracking ou analytics
- Aucune dépendance à des serveurs externes

✅ **Données Personnelles**
- Stockage local seulement
- Pas de cookies ou sessions
- Contrôle complet utilisateur

---

## 🎯 Utilisation

### Entrée de Données
1. Entrez le nom de votre entreprise
2. Naviguez par Scope
3. Saisissez les quantités pour chaque activité
4. Cliquez "Calculer Total"

### Résultats
1. Consultez les cartes de résumé
2. Explorez les graphiques Distribution par Scope
3. Analysez les résultats détaillés
4. Lisez les recommandations

### Export
1. Générez un rapport texte
2. Exportez en CSV pour Excel
3. Archivez vos analyses

---

## 📊 Données Techniques

- **Source:** IEA 2020 / GHG Protocol
- **Facteurs:** kg CO2e par unité
- **Standard:** GHG Protocol Corporate Standard
- **Industries:** Multi-secteur

---

## 🎨 Personnalisation

### Modifier Couleurs
Éditer `styles.css`:
```css
:root {
    --accent-green: #2D5F4F;
    --accent-light-green: #10B981;
}
```

### Ajouter Activités
Éditer `app.js`, section `emissionData`:
```javascript
{name: "Activité", unit: "unité", factor: X.XX}
```

### Modifier Facteurs
Les facteurs sont éditables dans l'application directement.

---

## 📱 Compatibilité

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📞 Support & Contact

**Créée par:** Mohamed Ayoub Essalami, MSc
- **Email:** mohamedayyoubaslami@gmail.com
- **Phone:** +216 94801112
- **LinkedIn:** www.linkedin.com/in/mohamed-ayoub-essalami
- **Portfolio:** https://tinyurl.com/Mohamed-ayoub

---

## 📄 Licence

Open Source - Libre d'utilisation, modification, et distribution.

---

## 🌍 Impact

Utilisez cet outil pour:
- Mesurer votre empreinte carbone
- Identifier les points chauds d'émission
- Fixer des objectifs de réduction
- Communiquer sur vos efforts durabilité
- Contribuer à la décarbonation

**© 2025 Mohamed Ayoub Essalami**

*Fait avec ❤️ pour un avenir durable*
