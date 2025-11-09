import type { LucideIcon } from 'lucide-react';
import {
  Headphones,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Clock,
  Mail,
  MapPin,
} from 'lucide-react';
import { FormTable, type FormTableType } from '@/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui';
import { TextParagraph, Title } from '@/typography';

type Highlight = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
};

type SupportChannel = {
  title: string;
  detail: string;
  description: string;
  hours: string;
  icon: LucideIcon;
};

type FAQItem = {
  value: string;
  question: string;
  answer: string;
};

const supportHighlights: Highlight[] = [
  {
    title: 'Concierge Service',
    description:
      'Zertifizierte Style Guides begleiten Sie durch Bestellungen, Retouren und Anpassungen in Echtzeit.',
    meta: 'Ø Antwortzeit 2 Min.',
    icon: Headphones,
  },
  {
    title: 'Premium Schutz',
    description:
      'Wir kümmern uns um Reparaturen, Garantieanfragen und Ersatzlieferungen innerhalb von 24 Stunden.',
    meta: '96% First-Contact-Lösung',
    icon: ShieldCheck,
  },
  {
    title: 'Rückruf nach Wahl',
    description:
      'Planen Sie individuelle Rückrufe und sprechen Sie direkt mit einem Senior Specialist für komplexe Anfragen.',
    meta: 'Timeslots alle 15 Min.',
    icon: PhoneCall,
  },
];

const supportChannels: SupportChannel[] = [
  {
    title: 'Live-Chat',
    detail: 'Antwort in 2 Minuten',
    description: 'Direkt im Browser oder in der LUXE App verfügbar.',
    hours: '24/7',
    icon: MessageSquare,
  },
  {
    title: 'Telefon',
    detail: '+49 30 8145 2200',
    description: 'Persönlicher Concierge werktags von 08:00 - 18:00 Uhr.',
    hours: 'Mo-Fr',
    icon: PhoneCall,
  },
  {
    title: 'E-Mail',
    detail: 'support@luxe.plus',
    description: 'Wir melden uns innerhalb eines Werktages zurück.',
    hours: '24/7 Eingang',
    icon: Mail,
  },
];

const faqItems: FAQItem[] = [
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

const supportFormData: FormTableType = {
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
  },
  cancel: 'Zurücksetzen',
  save: 'Nachricht senden',
};

const SupportPage: React.FC = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto space-y-12 px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Support
          </p>
          <Title level={2} weight="bold" className="text-gray-900">
            Wir sind immer dann da, wenn Sie uns brauchen.
          </Title>
          <TextParagraph className="text-gray-600">
            Ob Soforthilfe via Chat, persönliche Beratung am Telefon oder
            individuelle Services rund um Wartung und Anpassung – das
            Concierge-Team reagiert proaktiv, damit jedes Erlebnis reibungslos
            bleibt.
          </TextParagraph>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportHighlights.map(({ icon: Icon, title, description, meta }) => (
            <Card key={title} className="border-0 shadow-sm">
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {meta}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-0 shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="text-gray-900">
                Kontaktwege & Studio
              </CardTitle>
              <CardDescription className="text-gray-600">
                Wählen Sie den Kanal, der am besten zu Ihrer Situation passt.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {supportChannels.map(
                ({ icon: Icon, title, detail, description, hours }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex flex-1 items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-gray-400">
                          {title}
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          {detail}
                        </p>
                        <TextParagraph sm className="text-gray-600">
                          {description}
                        </TextParagraph>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1 text-sm font-medium text-gray-700">
                      <Clock className="h-4 w-4" />
                      {hours}
                    </div>
                  </div>
                )
              )}

              <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-gray-200 p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-gray-400">
                      Studio Berlin Mitte
                    </p>
                    <p className="font-semibold text-gray-900">
                      Linienstraße 24, 10178 Berlin
                    </p>
                    <TextParagraph sm className="text-gray-600">
                      Termine nach Vereinbarung – persönliche Fittings,
                      Reparatur-Check-ins und Same-Day Abholung.
                    </TextParagraph>
                  </div>
                </div>
                <Badge className="w-fit bg-orange-500 text-white">
                  Private Session buchen
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <FormTable {...supportFormData} />
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader className="space-y-2">
            <CardTitle className="text-gray-900">
              Häufige Fragen zum Support
            </CardTitle>
            <CardDescription className="text-gray-600">
              Transparente Antworten auf Anliegen, die uns täglich erreichen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="space-y-3 rounded-2xl"
            >
              {faqItems.map(({ value, question, answer }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white px-4"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-gray-900">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { SupportPage };
