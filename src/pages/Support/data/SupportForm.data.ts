import type { FormTableType } from '@/components';

const SupportFormData: FormTableType = {
  title: 'Schreiben Sie uns',
  subtitle: 'Wir melden uns garantiert innerhalb von 24 Stunden.',
  inputs: [
    {
      htmlFor: 'fullName',
      label: 'Voller Name',
      id: 'fullName',
      isRequired: true,
      placeholder: 'Max Mustermann',
    },
    {
      htmlFor: 'email',
      label: 'E-Mail',
      id: 'email',
      isRequired: true,
      placeholder: 'name@email.de',
    },
    {
      htmlFor: 'order',
      label: 'Bestellnummer (optional)',
      id: 'order',
      placeholder: '#LX-48321',
    },
    {
      htmlFor: 'callback',
      label: 'Bevorzugte Rückrufzeit',
      id: 'callback',
      placeholder: 'z. B. 10:00 - 12:00 Uhr',
    },
  ],
  textArea: {
    htmlFor: 'message',
    label: 'Ihr Anliegen',
    id: 'message',
    isRequired: true,
    placeholder: 'Beschreiben Sie kurz, wie wir helfen können.',
    rows: 4,
  },
  cancel: 'Zurücksetzen',
  save: 'Nachricht senden',
};

export default SupportFormData;