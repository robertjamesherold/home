type FAQItemProps = {
  value: string;
  question: string;
  answer: string;
};

const FAQItems: FAQItemProps[] = [
  {
    value: 'returns',
    question: 'Wie starte ich eine Retoure?',
    answer:
      'Beginnen Sie eine Retoure im Konto unter Bestellungen oder senden Sie uns die Bestellnummer per Formular. Wir erstellen sofort ein Label und holen das Paket auf Wunsch ab.',
  },
  {
    value: 'repairs',
    question: 'Bietet ihr Reparatur- oder Pflegeservices?',
    answer:
      'Ja. Unser Atelier-Team koordiniert Reparaturen mit zertifizierten Partnern. Nach der Analyse erhalten Sie einen transparenten Kostenvoranschlag und Versandetiketten.',
  },
  {
    value: 'availability',
    question: 'Kann ich mich für nicht verfügbare Produkte vormerken?',
    answer:
      'Tragen Sie Ihr Wunschprodukt im Support-Formular ein. Wir informieren Sie per SMS, sobald es wieder verfügbar ist oder schlagen Alternativen vor.',
  },
];

export default FAQItems;