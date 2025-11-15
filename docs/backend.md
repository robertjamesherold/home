# Checkout-API-Integration

Das Frontend benötigt kein dediziertes Backend mehr. Der Checkout-Flow nutzt jetzt standardmäßig eine lokale Mock-Antwort, sodass alle Seiten vollständig funktionieren, sobald `npm run dev` läuft.

## Standardbetrieb (Mock)

- `useCheckoutSubmission` simuliert eine Antwort mit Zahlungsstatus `succeeded` nach einer kurzen Verzögerung.
- Bestellnummern und Zahlungsreferenzen werden lokal generiert und auf der Erfolgsseite angezeigt.
- Fällt eine optionale Backend-Anfrage aus, wird automatisch auf die Mock-Antwort zurückgegriffen – der Nutzer bleibt im Flow.

## Echtes Backend anschließen

Wer eigene Checkout-/Payment-Logik anbinden möchte, kann weiterhin ein Backend verwenden:

1. Stelle einen Endpunkt `POST /api/orders/checkout` zur Verfügung, der die unten beschriebene Struktur versteht.
2. Hinterlege in `.env`:
   ```bash
   VITE_ENABLE_CHECKOUT_API=true
   VITE_API_BASE_URL=http://localhost:4000   # oder deine Produktiv-URL
   ```
3. Starte die App (`npm run dev`). Sobald `VITE_API_BASE_URL` gesetzt ist, leitet der Vite-Proxy alle `/api/*`-Aufrufe an diese URL weiter.

Wenn `VITE_ENABLE_CHECKOUT_API` auf `true` steht und der Request fehlschlägt, fällt der Hook automatisch auf die Mock-Antwort zurück, damit das Frontend bedienbar bleibt.

## Erwartete Request-/Response-Struktur

```json
{
  "customer": { "firstName": "Jane", "lastName": "Doe", "email": "jane@example.com" },
  "items": [
    { "id": "p1", "name": "Produkt", "price": 19.99, "quantity": 1 }
  ],
  "totals": { "subtotal": 19.99, "shipping": 0, "tax": 3.8, "total": 23.79, "currency": "eur" },
  "paymentMethod": "card"
}
```

Die Antwort sollte folgende Felder enthalten:

```json
{
  "order": {
    "_id": "ORDER_ID",
    "customer": { "...": "..." },
    "items": [],
    "totals": { "subtotal": 0, "shipping": 0, "tax": 0, "total": 0, "currency": "eur" },
    "payment": {
      "method": "card",
      "provider": "Stripe",
      "status": "succeeded",
      "externalReference": "PAYMENT_INTENT"
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "payment": {
    "provider": "Stripe",
    "status": "succeeded",
    "clientSecret": "pi_secret_123",
    "intentId": "pi_123",
    "message": "Zahlung erfolgreich erstellt."
  }
}
```

Mit dieser Struktur bleibt der Checkout vollständig kompatibel zum bestehenden UI-Flow.
