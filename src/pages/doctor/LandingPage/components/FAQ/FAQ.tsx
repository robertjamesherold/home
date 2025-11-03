import { Section, Header, Container } from '@/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';
import { TextParagraph, Title } from '@/typography';
import { FAQSdata } from './data';

const FAQ = () => {
  return (
    <Section className="bg-slate-50 py-12 md:py-20">
      <Container
        outerClass="container mx-auto px-4"
        innerClass="max-w-3xl mx-auto"
      >
        <Header className="mb-12 text-center">
          <Title
            level={2}
            className="mb-4 text-slate-900"
            text="Häufig gestellte Fragen"
          />
          <TextParagraph
            className="text-slate-600"
            text="Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Praxis und Behandlungen"
          />
        </Header>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQSdata.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border-none bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <TextParagraph className="text-slate-900" text={faq.question} />
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
};

export default FAQ;
