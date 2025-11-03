import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: 'Werden die Kosten von der Krankenkasse übernommen?',
    answer: 'Private Krankenkassen und Zusatzversicherungen übernehmen in der Regel einen Großteil der Kosten. Gesetzliche Krankenkassen bieten teilweise Zuschüsse an. Wir beraten Sie gerne individuell.'
  },
  {
    question: 'Wie lange dauert eine Behandlung?',
    answer: 'Die Dauer variiert je nach Behandlungsart. Ein Erstgespräch dauert etwa 60-90 Minuten, Folgebehandlungen zwischen 30 und 60 Minuten. Wir nehmen uns ausreichend Zeit für Ihre Anliegen.'
  },
  {
    question: 'Welche Beschwerden können behandelt werden?',
    answer: 'Wir behandeln ein breites Spektrum: chronische Schmerzen, Stress, Verdauungsprobleme, Allergien, Schlafstörungen, hormonelle Störungen und vieles mehr. Kontaktieren Sie uns für eine individuelle Beratung.'
  },
  {
    question: 'Wie schnell kann ich einen Termin bekommen?',
    answer: 'In der Regel können wir Ihnen innerhalb von 1-2 Wochen einen Termin anbieten. Bei akuten Beschwerden versuchen wir, kurzfristige Termine zu ermöglichen.'
  },
  {
    question: 'Kann ich die Behandlung mit Schulmedizin kombinieren?',
    answer: 'Ja, Naturheilkunde kann hervorragend mit schulmedizinischen Behandlungen kombiniert werden. Wir arbeiten auf Wunsch auch mit Ihrem Hausarzt zusammen.'
  },
  {
    question: 'Was muss ich zum Ersttermin mitbringen?',
    answer: 'Bringen Sie bitte alle relevanten Befunde, eine Liste Ihrer aktuellen Medikamente und Ihre Versicherungskarte mit. Falls vorhanden, auch frühere Behandlungsberichte.'
  }
];

export function FAQ() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-slate-600">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Praxis und Behandlungen
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-slate-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
