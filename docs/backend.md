# Backend-Server

Der Ordner [`server/`](../server) enthält einen Express-basierten Backend-Server mit folgenden Merkmalen:

- MongoDB-Anbindung via Mongoose (optional – bei fehlender `MONGODB_URI` wird ein In-Memory-Speicher verwendet).
- REST-Endpunkte für Bestellungen (`/api/orders`) und Zahlungsabwicklung (`/api/payments`).
- Stripe-Integration zur Erstellung von Payment-Intents, sofern ein `STRIPE_SECRET_KEY` vorhanden ist.
- Mock-Antworten für PayPal und Sofortüberweisung zur lokalen Entwicklung.

## Installation & Start

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Standardmäßig lauscht der Server auf Port `4000`. Der Vite-Client kann über die Umgebungsvariable `VITE_API_BASE_URL` (siehe [`.env.example`](../.env.example)) mit dem Backend verbunden werden.

## REST-Endpunkte

### `GET /api/health`
Health-Check des Servers.

### `GET /api/payments/methods`
Liste verfügbarer Zahlungsarten.

### `POST /api/payments/session`
Erstellt eine Zahlungssession (z. B. Stripe Payment Intent). Erwartet `method`, `amount` (in Cent) und optional `currency` sowie `metadata`.

### `POST /api/orders/checkout`
Nimmt Checkout-Daten entgegen, erzeugt eine Zahlungssession und speichert die Bestellung. Erwartet folgende Struktur:

```json
{
  "customer": { "firstName": "...", "lastName": "...", "email": "..." },
  "items": [
    { "id": "p1", "name": "Produkt", "price": 19.99, "quantity": 1 }
  ],
  "totals": { "subtotal": 19.99, "shipping": 0, "tax": 3.8, "total": 23.79, "currency": "eur" },
  "paymentMethod": "card"
}
```

Die Antwort enthält die Bestellung sowie Details zur Zahlung (z. B. Stripe `clientSecret`).
