# Facture Communication Événementielle

Site web de l'agence **Facture Communication Événementielle** — agence artistique et de production fondée par M. SANOH Alhassane. Le site présente les services de l'agence et intègre une billetterie en ligne.

## Stack technique

- **React 18** + **Vite** — framework et build tool
- **React Router v6** — navigation côté client
- **Tailwind CSS** + **Radix UI** — styles et composants UI
- **Framer Motion** — animations
- **Stripe** + **PayPal** — paiements en ligne

## Structure du projet

```
src/
├── api/
│   └── EcommerceApi.js     
├── components/
│   ├── ui/                  # Composants UI (Button, Toast, etc.)
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx / HeroImage.jsx
│   ├── Services.jsx
│   ├── Ambassadors.jsx
│   ├── Contact.jsx
│   ├── TicketCard.jsx
│   ├── OrderSummary.jsx
│   └── PaymentMethods.jsx
├── hooks/
│   └── useCart.jsx          # Hook panier (état global)
├── pages/
│   ├── HomePage.jsx         # Page d'accueil (présentation agence)
│   ├── TicketsPage.jsx      # Billetterie en ligne
│   ├── StorePage.jsx        # Boutique
│   ├── ProductDetailPage.jsx
│   └── SuccessPage.jsx      # Confirmation de paiement
└── main.jsx
plugins/                     # Plugins Vite custom (éditeur visuel, selection mode)
tools/
└── generate-llms.js         # Génération de fichiers llms.txt au build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil — présentation, services, portfolio, ambassadeurs, contact |
| `/billets` | Billetterie — choix de place (Normal / Réduit / VIP), formulaire, paiement |

## Démarrage

```bash
npm install
npm run dev        # Lance sur http://localhost:3000
```

## Build & preview

```bash
npm run build      # Build de production
npm run preview    # Preview du build sur http://localhost:3000
```

## Lint

```bash
npm run lint       # Erreurs uniquement
npm run lint:warn  # Erreurs et avertissements
```
